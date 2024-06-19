import classes from "./ExpContent.module.css";

const ExpContent = (props) => {
    const info = props.expText;
    const infoModified=info.split("<li>");
  return (
    <div className={classes.ExpContent}>
      <div className={classes.ExpContentTitle}>{props.expTitle}</div>
      <div className={classes.ExpContentText}>
        <ul>
            {infoModified.map((x,i)=>(<li key={i}>{x}</li>))}
            
        </ul>
      </div>
    </div>
  );
}

export default ExpContent;
