import React, {Component} from 'react';
import Avatar from './Avatar';
import * as apiCalls from './api';

//some helpful info at: https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab
class AvatarItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayImg: "inline",
            //randomUrl: "https://picsum.photos/id/1/300/300"
            randomUrl: this.props.img_url
        }
        this.toggleAvatar = this.toggleAvatar.bind(this);// Never forget to bind the methods!!
    //Otherwies, when calling this method, browser will throw "Uncaught TypeError: Cannot read property 'state' of undefined" Error!!!
        this.obtainRandomOnlineImg = this.obtainRandomOnlineImg.bind(this);
        this.getRandomAvatar = this.getRandomAvatar.bind(this);
    }
    
    toggleAvatar(){
        //alert("..." + this.state.displayImg);
        if(this.state.displayImg === "inline"){
            this.setState({displayImg: "none"});
        } 
        if(this.state.displayImg === "none"){
            this.setState({displayImg: "inline"});
        }
    }
    
   async obtainRandomOnlineImg(){
        let urlRoot = "https://picsum.photos/id/";
        let randomIndex = Math.floor(Math.random()*100);
        
        let imgUrl = urlRoot + randomIndex + "/300/300";
        
        return fetch(imgUrl)
              .then(res => {
                  //return res.json();
                  //return res.text(); // in fact the res is not a json object at all, but rather some random text tokens;
                                       // thus res.json() wouldn't work; has to use res.text() to find what is res exactly first
                  return res.url;
             // }).then(text => console.log(text)); // then console.log the res.text() out to see what it is
              });
    }
    
    async getRandomAvatar(){
        let imgData = await this.obtainRandomOnlineImg();
        //console.log(imgData);
        //Update the database
        await apiCalls.updateImgForAvatar(this.props._id, imgData); //api call to DB
         
        this.setState({randomUrl: imgData}) // update the UI
    }
    
    render(){
        
        return (
            <div>
                <div>
                    <li>
                        <span
                            style = {{textDecoration: this.props.completed ? "line-through" : "none",
                                      fontFamily: "cursive"
                                    }}
                            onClick={this.props.onToggle}
                        >
                        {this.props.name}
                        </span> 
                        <span                    
                            style={{color: "red"}}
                            onClick={this.props.onDelete}
                        > X 
                        </span>
                    </li>
                 {/* <div> {"_id: " + this.props._id} </div> */}
                </div>
                <div>
                    <button 
                        className="updateAvatarBtn"
                        onClick={this.getRandomAvatar}
                        //onClick={() => this.setState({displayImg: "inline"})}
                    >Get a random Avatar Pircture!
                    </button>
                    <button 
                        className="updateAvatarBtn"
                        onClick={this.toggleAvatar}
                        //onClick={() => this.setState({displayImg: "inline"})}
                    >Show/Hide Avatar Pircture!
                    </button>
                    <div>{"img_url: " + this.state.randomUrl}</div>
                    {// Notice here on how to add logic within render() by embracing it in {}
                        this.state.displayImg === "inline" ?    
                        <Avatar
                            alt="Default"
                            //src={this.props.img_url}
                            src={this.state.randomUrl}
                            style={{display: "inline", margin: "10px 10px"}}
                        /> :
                        <Avatar 
                            alt="Default"
                            //src={this.props.img_url}
                            src={this.state.randomUrl}
                            style={{display: "none", margin: "10px 10px"}}
                        />
                     }
                </div>
                <div 
                    style = {{color: "red"}}
                > {"completed: " + String(this.props.completed)} 
                </div>
                <div 
                    style = {{color: "grey"}}
                > {"description: " + String(this.props.description)} 
                </div>
            </div>
         ); // the () brackets wrapped around the div here is necessary!!!!
    } 
}

export default AvatarItem;