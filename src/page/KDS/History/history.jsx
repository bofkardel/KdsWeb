import React from 'react'
import PageTitle from '../HeadFoot/head'
import PageBottom from '../HeadFoot/foot'



class HistoryPage extends React.Component {


    render(){

        const styles={

        }

        return(
            <div>
                <div><PageTitle /></div>
                <div><HistoryPageContent /></div>
                <div><PageBottom /></div>
            </div>
        )
    }
}




class HistoryPageContent extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const styles={
            content:{
                backgroundColor:'#979797',
            },

        }

        return(
            <div style={styles.content}>


            </div>
        )
    }
}






export default HistoryPage