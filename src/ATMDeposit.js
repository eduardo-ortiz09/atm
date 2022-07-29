function ATMDeposit({ onChange, isDeposit, isValid}){
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label>
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input className="d-block mb-2" type="number" width="200" onChange={onChange}></input>
      {isValid === false && <p>Sorry, you don´t have money</p>}
      {isValid
        ? <input type="submit" width="200" value={choice[Number(!isDeposit)]} className="btn btn-primary"></input>
        : <input type="submit" width="200" value={choice[Number(!isDeposit)]} disabled className="disable"></input>
      }
    </label>
  );
};

export default ATMDeposit;

