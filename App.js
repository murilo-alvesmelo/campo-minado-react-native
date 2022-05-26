import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/components/params'
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import { createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed} from './src/components/functions';
import { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = this.createState()
  }


  minesAmout = () =>{
    const cols = params.getCollumAmount()
    const rows = params.getRowsAmout()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState =() =>{
    const cols = params.getCollumAmount()
    const rows = params.getRowsAmout()

    return {
      board: createMinedBoard(rows, cols, this.minesAmout()),
      win: false,
      lost: false,
      showLevelSelection: false
    }
  }

  openField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const win = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert("Game Over!")
    }
    if(win){
      alert.alert("Congratulations!")
    }

    this.setState({ board, lost, win})
  }

  OnSelectField = (row, column) =>{
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert("Congratulations!")
    }

    this.setState({board, won})
  }

  onLevelSelected = level =>{
    params.difficultLevel = level
    this.setState(this.createState())
  }
  render(){
    return (
      <View style={styles.container}>
        <LevelSelection 
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({showLevelSelection: false})}/>
        <Header 
          flagsLeft={this.minesAmout() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={()=> this.setState({showLevelSelection: true})}
        />
        <View style={styles.board}>
          <MineField 
            board={this.state.board}
            openField = {this.openField}
            OnSelectField = {this.OnSelectField}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
});
