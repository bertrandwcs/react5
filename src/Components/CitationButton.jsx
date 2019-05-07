import  React  from  'react';

const  CitationButton = ({getSimpson}) => {
    return (
        <div  className="CitationButton">
        <button  onClick={getSimpson}>Get citation</button>
        </div>
    );
};

export  default  CitationButton;