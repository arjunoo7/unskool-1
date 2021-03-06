import styleVariables from '../../Themes/Variables'

const summary = {}

summary.container = {
  backgroundColor: 'white',
  // height: 220
}

summary.raitingsAndComments = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 1,
  paddingLeft: 16
}

summary.raitings = {
  display: 'flex',
  flexDirection: 'row'
}

summary.comments = {
  display: 'flex',
  flexDirection: 'row'
}

summary.summaryCopy = {
  color: styleVariables.mc2fontGray,
  paddingLeft: 16,
  paddingRight: 16,
  marginBottom: 9,
  fontSize: 16,
  fontStyle: 'italic'
}

summary.greetingContainer = {
  paddingTop: 10,
  paddingBottom: 5,
  justifyContent: 'center',
  alignItems: 'center'
}

summary.summaryBodyCopy = {
  marginBottom: 12
}

summary.tagItem = {
  backgroundColor: styleVariables.mc2medGray,
  height: 25,
  padding: 5,
  margin: 5,
}

summary.ellipsis = {
  backgroundColor: 'gray',
  padding: 5,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 16,
  marginRight: 4,
  margin: 4
}

summary.tagItemCopy = {
  color: 'white',
  fontWeight: '500'
}

summary.modal = {
  justifyContent: 'center',
  alignItems: 'center',
  height: 300
}


export default summary
