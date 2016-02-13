// import Modal from 'react-bootstrap/lib/Modal'
// import Input from 'react-bootstrap/lib/Input'
// import Button from 'react-bootstrap/lib/Button'
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'
// import React from 'react'
// //
// // const mapStateToProps = (state) => ({
// //   logginDialoge: state.user.get('logginDialoge'),
// //   hotelList: state.hotelList.hotels,
// //   hotelDetails: state.hotel.get('hotelDetails')
// // })
//
// export class MenuItemModal extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       useCurrentHotel: true,
//       hotelFilter: '',
//       filter: '',
//       items: ['Apple', 'Banana', 'Orange'],
//       currentHotel: this.props.hotelDetails
//     }
//   }
//
//   componentDidMount () {
//     this.props.getHotels()
//   }
//
//   login (state) {
//     return () => {
//       console.log('yay, it is clicking at least')
//       return this.props.login(state)
//     }
//   }
//
//   toggleLoginDialoge (state) {
//     return () => this.props.openLoginDialoge(state)
//   }
//
//   submitLoginData () {
//     // return () => console.log(this.refs.useCurrentHotel.getValue())
//     // this.refs.email.getValue(),this.refs.firstName.getValue(),this.refs.lastName.getValue()
//     return () => this.props.tryLogin(this.state.currentHotel.id,
//       this.refs.firstName.getValue(),
//       this.refs.lastName.getValue(),
//       this.refs.email.getValue())
//       // .then(() => {
//       //   console.log('Done! you have logged in!')
//       // })
//   }
//
//   selectHotel () {
//     const innerGlyphicon = <Glyphicon glyph='search' />
//     var filterRegex = new RegExp(this.state.filter, 'i')
//     var listItems = this.props.hotelList.map(function (item) {
//       return item.sb_hotel_name.match(filterRegex) && <option key={item.sb_hotel_id} value={item.sb_hotel_id}>{item.sb_hotel_name}</option>
//     })
//
//     return (
//       <div>
//         <Input
//           type='text'
//           placeholder='Filter by...'
//           addonBefore='Search Hotel:'
//           addonAfter={innerGlyphicon}
//           onChange={this.updateFilter(this)}/>
//         <Input type='select' multiple onChange={this.hotelSelect(this)}>
//           {listItems}
//         </Input>
//       </div>
//     )
//   }
//
//   handleChange (field, e) {
//     var nextState = this.state
//     nextState[field] = e.target.checked
//     this.setState(nextState)
//   }
//
//   hotelSelect (self) {
//     return (event) => {
//       return self.setState({currentHotel: {id: event.target.value, name: event.target.selectedOptions[0].text}})
//     }
//   }
//
//   updateFilter (self) {
//     return (event) => self.setState({ filter: event.target.value })
//   }
//
//   useHotel () {
//     const innerGlyphicon = <Glyphicon glyph='search' />
//     let hotelName = this.props.hotelDetails.name
//     let checkBoxMessage = 'Use current hotel: ' + hotelName
//
//     var filterRegex = new RegExp(this.state.filter, 'i')
//     var listItems = this.props.hotelList.map(function (item) {
//       return item.sb_hotel_name.match(filterRegex) && <option key={item.sb_hotel_id} value={item.sb_hotel_id}>{item.sb_hotel_name}</option>
//     })
//
//     return (
//       <div>
//         <Input
//           type='checkbox'
//           label={checkBoxMessage}
//           checked={this.state.useCurrentHotel}
//           onChange={this.handleChange.bind(this, 'useCurrentHotel')}/>
//         <Input
//           type='text'
//           placeholder='Filter by...'
//           addonBefore='Search Hotel:'
//           addonAfter={innerGlyphicon}
//           onChange={this.updateFilter(this)}/>
//         <Input type='select' multiple onChange={this.hotelSelect(this)}>
//           {listItems}
//         </Input>
//       </div>
//     )
//   }
//
//   displayHotel () {
//     return (
//       <p>You have selected hotel: {this.state.currentHotel.name}</p>
//     )
//   }
//
//   askForHotel () {
//     return (
//       <p>Please select a hotel. Use the search filter to help you find your hotel.</p>
//     )
//   }
//
//   render () {
//     return (
//       <div>
//         <Modal show={this.props.logginDialoge} onHide={this.toggleLoginDialoge(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Login</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Input type='email' label='Email Adress' placeholder='Enter email' ref='email'/>
//             <Input type='text' label='First Name' placeholder='Enter your first-name' ref='firstName'/>
//             <Input type='text' label='Surname' placeholder='Enter your surname' ref='lastName'/>
//             {(this.state.currentHotel.id === -1) ? this.askForHotel() : this.displayHotel()}
//             {(this.props.hotelDetails.id === -1) ? this.selectHotel() : this.useHotel()}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.submitLoginData()}>Login</Button>
//             <Button onClick={this.toggleLoginDialoge(false)}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }
//
// export default connect(mapStateToProps, {...userActions, ...listActions})(MenuItemModal)
