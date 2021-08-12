import React, {Component} from 'react';

class AltContactDialer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      phoneNumbers: [],
      searchTerm: '',
      matchingContact: ['NO CONTACT'],
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      contacts: this.props.contacts,
      phoneNumbers: this.props.phoneNumbers,
    });
  }

  updateSearch(event) {
    const prevProps = this.state.searchTerm;
    this.setState({
      searchTerm: event.target.value,
    });
    this.updateContactResults(event.target.value);
    this.componentDidUpdate(prevProps);
  }

  componentDidUpdate(prevProps) {
    if (prevProps == this.state.searchTerm) {
      this.componentDidMount();
    }
  }

  updateContactResults(currentSearchTerm) {
    const currentContacts = this.state.contacts;
    const currentPhoneNumbers = this.state.phoneNumbers;
    let matchingContacts = [];
    for (let i = 0; i < currentPhoneNumbers.length; i++) {
      if (!currentPhoneNumbers[i].includes(currentSearchTerm)) {
        for (let i = 0; i < matchingContacts.length; i++) {
          if (matchingContacts[i].includes(currentContacts[i])) {
            matchingContacts.splice(i, 1);
            matchingContacts.length == 0 ? ['NO CONTACT'] : matchingContacts;
          }
        }
      } else {
        matchingContacts.push(currentContacts[i]);
      }
    }
    matchingContacts = matchingContacts.length == 0 ? ['NO CONTACT'] : matchingContacts.sort();
    const prevProps = this.state.searchTerm;
    this.setState({
      matchingContact: [matchingContacts[0]],
    });
  }


  render() {
    return (
      <div>
        <input
          type="text"
          placeholder = "search"
          name = "searchTerm"
          onChange = {this.updateSearch}/>
        <p>Your Contact</p>
        <p>{this.state.matchingContact[0]}</p>

      </div>
    );
  }
}

export default AltContactDialer;
