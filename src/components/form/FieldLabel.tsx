import classNames from 'classnames'
import React from 'react'
import { Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Info } from 'react-feather'

import useModal from '../../hooks/useModal'
import { getTooltipClassName } from '../../lib/helpers'

interface Props {
  children: React.ReactNode
  htmlFor?: string
  className?: string
  wrapperClassName?: string
  tooltipHint?: TooltipHint
  modalHint?: ModalHint
}

export interface TooltipHint {
  triggerText?: string
  text: React.ReactElement | string
  className?: string
}

export interface ModalHint {
  triggerText: string
  modalTitle: string
  modalContent: React.ReactNode
}

const FieldLabel: React.FC<Props> = ({
  htmlFor,
  children,
  className,
  wrapperClassName: customWrapperClassName,
  tooltipHint,
  modalHint,
}) => {
  const {
    isShowingModal: isShowingModalHint,
    showModal: showModalHint,
    hideModal: hideModalHint,
  } = useModal()

  const wrapperClassName = customWrapperClassName
    ? customWrapperClassName
    : classNames('mb-1')

  const renderLabel = () => (
    <Form.Label htmlFor={htmlFor} className={classNames('mb-0', className)}>
      {children}
    </Form.Label>
  )

  if (tooltipHint) {
    const tooltipClassName = getTooltipClassName(tooltipHint.text)

    // Render with custom tooltip trigger text
    if (tooltipHint.triggerText) {
      return (
        <div
          className={classNames(
            wrapperClassName,
            'd-md-flex justify-content-md-between',
          )}
        >
          {renderLabel()}

          <OverlayTrigger
            overlay={
              <Tooltip className={tooltipClassName}>{tooltipHint.text}</Tooltip>
            }
          >
            <div className="text-primary cursor-default ps-md-3 ms-md-n1 mb-1 mb-md-0">
              {tooltipHint?.triggerText}
            </div>
          </OverlayTrigger>
        </div>
      )
    }

    // Render with default info mark tooltip
    return (
      <div className={classNames(wrapperClassName, 'd-flex align-items-end')}>
        <Form.Label htmlFor={htmlFor} className={classNames('mb-0', className)}>
          {children}
          <OverlayTrigger
            overlay={
              <Tooltip className={tooltipClassName}>{tooltipHint.text}</Tooltip>
            }
          >
            <Info
              className="text-primary ms-1"
              size={16}
              style={{ marginTop: '-2px' }}
            />
          </OverlayTrigger>
        </Form.Label>
      </div>
    )
  }

  // Render with tooltip that opens a modal
  if (modalHint) {
    return (
      <div className={classNames(wrapperClassName, 'd-md-flex')}>
        {renderLabel()}

        <div>
          <div
            role="button"
            className="text-primary cursor-pointer ps-md-3 mb-1 mb-md-0"
            onClick={() => showModalHint()}
          >
            {modalHint.triggerText}
          </div>

          <Modal show={isShowingModalHint} onHide={hideModalHint}>
            <Modal.Header closeButton>
              <Modal.Title>{modalHint.modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{modalHint.modalContent}</Modal.Body>

            <Modal.Footer onClick={hideModalHint}>
              <Button variant="outline-secondary">Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }

  // Render without tooltips
  return (
    <div className={classNames(wrapperClassName, className)}>
      {renderLabel()}
    </div>
  )
}

export default FieldLabel
