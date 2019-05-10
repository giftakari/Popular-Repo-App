import React from 'react';
import propTypes from 'prop-types'


function LanguageNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'React', 'Angular', 'Vue', 'Sql', 'C#', '.Net', 'Java', 'JavaScript', 'Python', 'Ruby', 'Php', 'C++', 'C']
  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button style={language === selected ? { color: 'rgb(187, 46,31)' } : null}
            className='btn-clear nav-link' onClick={() =>
              onUpdateLanguage(language)}>
            {language}
          </button>
        </li>
      ))}

    </ul>
  )
}

LanguageNav.propTypes ={
  selected: PropTypes.string.isRequired,
  onUpdateLanguage:PropTypes.func.isRequired
}

class Pupolar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage })
  }


  render() {
    const { selectedLanguage } = this.state;
    return (
      <React.Fragment>
        <LanguageNav selected={selectedLanguage} onUpdateLanguage={this.updateLanguage} />
      </React.Fragment>
    )
  }
}

export default Pupolar;