import React,{Component}from 'react';
import Modal from '../../components/UI/Modal/Modal';
import  Aux from '../Auxi/Auxi';

const witherrorHandler=(WrappedComponent,axios )=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
            this.reqInterceptor=axios.interceptors.request.use( req=>{
                this.setState({error:null});
                return req
                
            });
            this.resInterceptor= axios.interceptors.response.use( req=>req, (err)=>{
                
                this.setState({error:err});
               });

        }
        componentWillUnmount(){
            axios.interceptors.request.eject( this.reqInterceptor)
            axios.interceptors.request.eject( this.resInterceptor)
        }
        errorHandler=()=>{
            this.setState({error:null})
        }
   
    render(){
       
        return(
             <Aux>
            <Modal 
                show={this.state.error}
                modalClosed={this.errorHandler}>

                {this.state.error? this.state.error.message:null}

            </Modal>
            <WrappedComponent {...this.props}></WrappedComponent>
            </Aux>)
    } 

}
}
export default witherrorHandler; 