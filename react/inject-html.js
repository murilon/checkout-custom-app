import React from 'react'
import { canUseDOM } from 'exenv'

const renderRoot = () => {

  if (canUseDOM) {
    const div = document.createElement('div')

    div.textContent = 'Injetado pelo React'

    const shippingPreviewContainer = document.getElementById('shipping-preview-container')

    shippingPreviewContainer.appendChild(div)
  }

  return null
}

export default renderRoot
