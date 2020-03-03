import Arrow from "../public/arrow.svg";

const bitsToGbit = b => b / 1073741824;

const Plan = props => {
  const convertedSpace = bitsToGbit(props.MaxSpace);
  return (
    <div className="plan">
      <h2>{props.Name}</h2>
      <p className="pricing">${props.Pricing["1"]}/mo</p>
      <p className="title">{props.Title}</p>
      <p className="bullet">
        <Arrow className="svg" />
        <span>{props.MaxMembers} user</span>
      </p>
      <p className="bullet">
        <Arrow className="svg" />
        <span>
          {convertedSpace < 1
            ? `${convertedSpace * 1000} Mb storage`
            : `${convertedSpace} Gb storage`}
        </span>
      </p>
      <p className="bullet">
        <Arrow className="svg" />
        <span>{props.MaxAddresses} address</span>
      </p>
      <p className="bullet">
        <Arrow className="svg" />
        <span>
          {props.MaxDomains
            ? `Supports ${props.MaxDomains} domain`
            : `No domain support`}
        </span>
      </p>
      <p className="bullet asdomare">
        <Arrow className="svg" />
        <span>ProtonVPN (optional)</span>
      </p>
      <div className="cta">
        <a>Select</a>
      </div>
      <style jsx>{`
        .plan {
          padding: 1em;
          height: 100%;

          display: flex;
          flex-flow: column nowrap;
        }
        h2 {
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 0px;
        }
        .bullet {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          width: 100%;
        }
        .pricing {
          text-align: center;
          margin-top: 2px;
        }
        .title {
          margin: 30px 0;
          text-align: center;
        }
        .cta {
          margin-top: auto;
          text-align: center;
        }
        a {
          font-size: 13px;
          background-color: #9199cb;
          border-radius: 5px;
          color: #fff;
          padding: 1em 2em;
          text-align: center;
          cursor: pointer;
        }
      `}</style>
      <style jsx global>{`
        svg {
          width: 12px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Plan;
