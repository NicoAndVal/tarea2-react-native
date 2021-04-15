import React, { Component } from 'react'
import { Text,  TouchableOpacity, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding:20
    }
})

export default class DescriptionMovie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDescription: true
        }
    }

    show = ()=> this.setState(({showDescription}) =>({showDescription: !showDescription}) )

    render() {

        const { showDescription } = this.state;
        const { storyline } = this.props;
        return (
            <View style={styles.container}>
                 <TouchableOpacity
                        onPress={this.show}
                    >
                        <Text>Ver Descripción</Text>
                </TouchableOpacity>

                {!showDescription ? 
                    <Text>{storyline }</Text>:
                    null }
            </View>
        )
    }
}
