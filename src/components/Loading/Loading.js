import React, { Component } from 'react';

class Loading  extends Component {

    componentDidMount(){
        let id = this.props.id;
        let { handleLoad } = this.props;
        if (!this.props.loaded){
            handleLoad(id);
        }
    }

    render(){
        const { children,loaded } = this.props;

        return loaded ? children : (
            
            <div className="progress">
                <div 
                    className="progress-bar progress-bar-striped active"
                    style={{ width:"100%" }}
                />
            </div>
            
        );
    }
};

export default Loading;