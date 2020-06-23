import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'indigo'
        },
        setAtributos: {
            alignSelf: 'center',
            
            padding: 4,
            marginTop: 5,
            
            

            borderRadius: 9,

            height: 600, 
            width: '90%',
            
            backgroundColor: 'lightgray',
        },
        itemText:{

            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 17,
            

        },
        item: {

            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 20 ,
        },
        itens: {

            alignSelf: 'center',
            marginTop: 5
        },
        // button: {
            
        //     alignItems: 'center',
        //     borderRadius: 5,
        //     height: 25,
        //     width: 30,
        //     marginBottom: 5 ,
        //     backgroundColor: 'green'

            


        // },
        buttonplus: {
            alignSelf: 'center',

            marginRight: 20,
            
           

            borderRadius: 5,

            height: 25,
            width: 35,

            

            backgroundColor: 'darkgreen',
            borderWidth: 2,
            borderColor: 'indigo'
           

        },
        buttonminus: {
            
            alignSelf: 'center',

            borderRadius: 5,
            

            marginLeft: 20,
           
            height: 25,
            width: 35,

          

            backgroundColor: 'darkgreen',
            borderWidth: 2,
            borderColor: 'indigo'

            
        },
        lista: {
            padding: 0,
            borderStyle: 'solid',
            borderWidth: 1, 
            borderRadius: 9 ,

            height: '90%',
            width: 200,

            alignSelf: 'center',
            position: 'absolute',
            
            marginTop: 50
            



        },
        viewButtons: {

            justifyContent: "space-between",
            flexDirection: "row-reverse",
            marginBottom:-8,
            marginTop:60,
            
        },
        viewpontos: {
            flexDirection: 'row-reverse',
            
            justifyContent: 'space-between' ,
            width: '100%'
        },
        interrogacao: {
            height:27.5,
            width:27.5,
            
            marginTop:10,
            marginRight: 70


        },
        textoAtributos: {
            marginLeft: 125,
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 32,
            marginBottom: 2
        },
        modalinterrogacao: {
            alignSelf: 'center' ,
            marginVertical: '50%',
            textAlign: 'center',

            height: '50%',
            width: '65%',

            padding: 9,

            backgroundColor: 'indigo',
            borderRadius: 5,
        },
        textInterrogacao: {
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
            
        },
        listaInt: {
            padding: 0,
        
            height: '90%',
            width: 200,

            alignSelf: 'center',
             
            marginTop: 30

        },
        Xmodal: {
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 15,
            alignSelf: 'flex-end',
            marginBottom: 30,
            borderColor: 'darkgoldenrod',
            borderWidth: 1,
            backgroundColor: 'indigo'

        },
        Selectmodal: {
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 45,
            borderColor: 'darkgoldenrod',
            borderWidth: 1,
            backgroundColor: 'indigo'
            

        },
        escolha: {
            alignSelf:'center',
            textAlign: 'center',
            textAlignVertical: 'center',

            color:'lightgray',

            height: '25%' ,
            width: '90%' ,
            fontSize: 17,
            fontWeight: 'bold',

            marginTop:20,
            borderWidth: 2,
            borderColor: 'indigo',
            borderRadius: 9 ,
            backgroundColor:'darkgreen'
            
        },
         modalTalentos: {
            alignSelf: 'center' ,
            marginVertical: '15%',
            textAlign: 'center',

            height: '90%',
            width: '80%',

            padding: 5,

            backgroundColor: 'indigo',
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'darkgoldenrod',
            borderRadius: 9
        },
        textTalentos: {
            marginTop: 20,
            
            textAlign: 'center',
            textAlignVertical:'center',
            width: '99%' , 
            height: 35,
            fontSize: 15,
            color: 'gold',
            borderWidth: 2,
            borderRadius: 9
        },
        escolherText: {
            color: 'gold',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            alignSelf: 'center'

        },
    
        modalDesc: {
            alignSelf: 'center' ,
            marginVertical: '30%',
            textAlign: 'center',

            height: '70%',
            width: '65%',

            padding: 5,

            backgroundColor: 'darkslateblue',
            borderRadius: 5,
            borderColor: 'darkgoldenrod',
            borderWidth: 2,
            
        },
        textDesc: {
            textAlign: 'center',
            marginBottom:2,
            fontSize: 15,
            color: 'gold',

        },
        textDescTitle: {
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom:20,
            marginTop: -30,
            fontSize: 22,
            color: 'gold',

        },
         settalentos: {
            alignSelf: 'center',
            
            padding: 4,
            marginTop: 5,
            marginBottom: 50,
            
            

            borderRadius: 9,

            height: 150, 
            width: '90%',
            
            backgroundColor: 'lightgray',
        },
        textViewTalentos: {
            color: 'darkgreen',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
            

        },

})


export default styles;