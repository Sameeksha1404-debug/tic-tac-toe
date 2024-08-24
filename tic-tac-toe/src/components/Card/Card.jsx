import Icon from '../Icon/Icon';

import './Card.css'

function Card({gameEnd,players,onPlay,index}){
    let icon=<Icon/>
    if(players === 'X'){
        icon=<Icon name="cross"/>
    }else if(players==="O"){
        icon=<Icon name="circle" />
    }

      return(
        <div className='card' onClick={()=>!gameEnd && onPlay(index)}>
            {icon}

        </div>
       )
}

export default Card;