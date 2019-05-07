import  React  from  'react';

const  DisplayData = ({description}) => {
    return (
        <div  className="DisplayData">
            <img  src={description.image}  alt="img"  />
            <ul>
                <li>charactere : {description.charactere}
                </li>
                <li>
                    quote : {description.quote} 
                </li>
                <li>characterDirection : {description.characterDirection}</li>
            </ul>
        </div>
    );
};

export  default  DisplayData;