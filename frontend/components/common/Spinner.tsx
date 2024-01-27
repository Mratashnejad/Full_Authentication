import cn from 'classnames';
import { ImSpinner2 } from "react-icons/im";

interface Props{
    sm?: boolean;
    md?: boolean;
    lg?: boolean;

}

export default function Spinner({sm ,md ,lg}: Props){
    const className = cn('animate-spin text-white-300 fill-white-300 mr-2',{
        'w-4 h-4':    sm,
        'w-4 h-6':    md,
        'w-4 h-8':    lg,
    });

    return(
       
        <div role='status'>
            <ImSpinner2 className={className} />
            <span className='st-only'> loading...</span>
        </div>
    );
}


