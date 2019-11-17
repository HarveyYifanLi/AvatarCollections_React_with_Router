import React, {Component} from 'react';

class AvatarForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValueName: "",
            inputValueURL: "",
            inputValueDescpn: ""
        }
        
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeURL = this.handleChangeURL.bind(this);
        this.handleChangeDescpn = this.handleChangeDescpn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleEnterKeySubmit = this.handleEnterKeySubmit.bind(this);
    }
    
    handleChangeName(event){
       this.setState({
           inputValueName: event.target.value
       });
    }
     
    handleChangeURL(event){
       this.setState({
            inputValueURL: event.target.value
       });
    }
    
    handleChangeDescpn(event){
       this.setState({
            inputValueDescpn: event.target.value
       });
    }
    
    handleSubmit(){
        //console.log(this.state.inputValue);
        this.props.addAvatar(this.state);
    }
 
    // Works but this is not the way to submit a forms
    // handleEnterKeySubmit(event){ // add another method to handle "Enter" key pressing to submit the form
    //     if (event.keyCode === 13){
    //         //event.preventDefault(); // Necessary, to prevent from default form submission, thus prevent from submitting form twice
    //         if(this.state.inputValue !== "" || this.state.inputValue !== undefined){
    //             event.preventDefault(); // Necessary, to prevent from default form submission, thus prevent from submitting form twice
    //             this.props.addAvatar(this.state.inputValue);
    //         }
    //     }
    // }
    
    render(){
        return (
            <div>
                <div>
                    <form >
                        <div className="form-group">
                            <label htmlFor="formControlInput1">Name of Avatar</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="formControlInput1" 
                                placeholder="Your Avatar's Name"
                                value={this.state.inputValueName}
                                onChange={this.handleChangeName}
                                //onKeyDown={this.handleEnterKeySubmit}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formControlInput2">URL of Avatar</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="formControlInput2" 
                                placeholder="Enter a url for your Avatar"
                                value={this.state.inputValueURL}
                                onChange={this.handleChangeURL}
                            />
                        </div>
                    {/*
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="customFile" />
                          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                     */} 
                        <div className="form-group">
                            <label htmlFor="formControlTextarea1">Description of Avatar</label>
                            <textarea 
                                className="form-control" 
                                id="formControlTextarea1" 
                                rows="4"
                                value={this.state.inputValueDescpn}
                                onChange={this.handleChangeDescpn}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.handleSubmit}
                        >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AvatarForm;