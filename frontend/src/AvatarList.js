import React, {Component} from 'react';
import AvatarForm from './AvatarForm';
import AvatarItem from './AvatarItem';
import * as apiCalls from './api';

class AvatarList extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatars: []
        }
        this.addAvatar = this.addAvatar.bind(this);
    }
    
    componentWillMount(){
       //debugger; // debugger test shows that componentWillMount() will run before render
       this.loadAvatars();
    }
    
    async loadAvatars(){
      let avatars = await apiCalls.getAvatars(); // call async function from apiCalls // api
      this.setState({avatars: avatars}); // Update the state with the responded loaded data  // UI
    }
    
    async addAvatar(val){
      let newAvatar = await apiCalls.createAvatar(val);             // api
      this.setState({avatars: [...this.state.avatars, newAvatar]});   // UI
    }
    
    async deleteAvatar(id){
      await apiCalls.removeAvatar(id);    // api
      const avatars = this.state.avatars.filter((avatar) => avatar._id !== id);//note on how the filter method is defined for array, condition satisfied ones will remain
      this.setState({avatars: avatars});    // UI
    }
    
    async toggleAvatar(avatar){
      let updatedAvatar = await apiCalls.updateAvatar(avatar); //api
      const avatars = this.state.avatars.map((avatar) => {// check each avatar, for the one that is updated, change its 'completed' property.
          if(avatar._id === updatedAvatar._id){
              return {...avatar, completed: updatedAvatar.completed}
          } 
          else return avatar; // else there's nothing to change for that avatar
      });
      this.setState({avatars: avatars});  //UI
    }
    
    render(){
        //debugger;
        let avatars = this.state.avatars.map((avatar) => {
            return (
                <div>
                    <AvatarItem 
                      key = {avatar._id}
                      {...avatar}
                      onDelete = {this.deleteAvatar.bind(this, avatar._id)} // note that deleteAvatar has to be binded here and the second argument provide the deleteAvatar with its parameter
                      onToggle = {this.toggleAvatar.bind(this, avatar)}// note on the second argument! i.e. each item in the avatars array in the state
                    />
                    <hr className="my-4" />
                </div>
            );
        });
        
        return (
            <div className="jumbotron">
                <h2> Create an Avatar! </h2>
                <AvatarForm 
                    addAvatar={this.addAvatar}
                />
                <hr className="my-4" />
                <h2> Your Avatar Collections! </h2>
                <div className="avatars">
                    <ol>
                        {avatars}
                    </ol>
                </div>
            </div>
        );
    }
}

export default AvatarList;