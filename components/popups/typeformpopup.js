import { PopupButton } from '@typeform/embed-react'
import { Sidetab } from '@typeform/embed-react'
import { Widget } from '@typeform/embed-react'

const TypeFormPopup = (props) => {
  return (
    <PopupButton id={`${props.id}`} style={{ fontSize: 20 }} className="my-button text-xs sm:text-lg">
      {props.message}
    </PopupButton>
  )
}

export default TypeFormPopup;