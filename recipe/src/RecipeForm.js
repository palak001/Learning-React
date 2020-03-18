import React, {Component} from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
    static defaultProps = {
        onClose() {},
        onSave()  {}
    }

    constructor(props) {
        super(props);
        this.state={
            title: '',
            instructions: '',
            ingredients: [''],
            image: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleNewIngredient(e) {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }

    handleChangeIng(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? e.target.value : ing
        ));
        this.setState({ingredients});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            image: ''
        });
    }

    render() {
        const {title, instructions, ingredients, image} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div key={`ingredient-${i}`}>
                <label>{i + 1}.
                    <input
                      style={{margin: '5px', padding: '5px'}}
                      type="text"
                      name={`ingredient-${i}`}
                      value={ing}
                      size={45}
                      autoComplete="off"
                      placeholder="Ingredient"
                      onChange={this.handleChangeIng} />
                </label>
            </div>
        ));
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                      type="button"
                      className="close-button"
                      onClick={onClose}>
                        X
                      </button>

                    <div class='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                          id='recipe-title-input'
                          key='title'
                          name='title'
                          type='text'
                          value={title}
                          size={42}
                          autoComplete="off"
                          onChange={this.handleChange} /><br />
                        <label htmlFor='recipe-instructions-input'>Instructions</label><br />
                        <textarea
                          id='recipe-instructions-input'
                          key='instructions'
                          type='Instructions'
                          name='instructions'
                          rows='8'
                          cols='50'
                          autoComplete='off'
                          value={instructions}
                          onChange={this.handleChange}
                          /><br />
                        {inputs}
                        <button
                          type="button"
                          onClick={this.handleNewIngredient}
                          className="buttons">
                              +
                          </button><br />
                          <div className='recipe-form-line'>
                             <label htmlFor='recipe-img-input'>Image Url</label><br />
                             <input
                               id='recipe-img-input'
                               type='text'
                               placehholder=''
                               name='image'
                               value={image}
                               size={36}
                               autoComplete='off'
                               onChange={this.handleChange} /><br />
                          </div><br />
                          <button
                            type="submit"
                            className="buttons"
                            style={{alignSelf: 'flex-end', marginRight: 0}}>
                                SAVE
                            </button><br />                          
                    </div>
                </form>
            </div>
        );
    }
}

export default RecipeForm;