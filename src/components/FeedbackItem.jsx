import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item, item: { id, rating, text } }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
}

export default FeedbackItem
