import { useImmer } from 'use-immer';
export default function Scoreboard() {
    const [player, setPlayer] = useImmer({
      firstName: 'Ranjani',
      lastName: 'Shettar',
      score: 10,
    });
  
    function handlePlusClick(e) {
      setPlayer(draft=>{
        draft.score=player.score+1;
      })
      
    }
  
    function handleFirstNameChange(e) {
     
       setPlayer(draft=>{
        draft.firstName=e.target.value
      })
    }
  
    function handleLastNameChange(e) {
      setPlayer(draft=>{
        draft.lastName= e.target.value
      });
    }
  
    return (
      <>
        <label>
          Score: <b>{player.score}</b>
          {' '}
          <button onClick={handlePlusClick}>
            +1
          </button>
        </label>
        <label>
          First name:
          <input
            value={player.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
            value={player.lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </>
    );
  }