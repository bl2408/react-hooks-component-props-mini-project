function EmojiTime({minutes}){
    const calcMinEmjoi =()=>{
        const arr=[];
        const calc = Math.round(minutes / (minutes < 30 ? 5 : 10));

        for(let i=0; i < calc; i++){
            arr.push((minutes < 30 ? "☕️" : "🍱"));
        }

        return arr;
    };
    return (
        <>
            {calcMinEmjoi()} {minutes} min read.
        </>
    );
}
export default EmojiTime;