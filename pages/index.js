import fetch from 'isomorphic-unfetch';
import Plan from '../components/Plan';

const HomePage = ({ plans }) => {
  return (
    <>
      <h2>Plans & prices</h2>
      <ul className="plans">
        {plans.map(plan => (
          <li className="plan" key={plan.ID}>
            <Plan {...plan} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .plans {
          list-style: none;
          margin: 2em;
          padding: 0;
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .plan {
          display: flex;
          height: 100%;
          flex-direction: column;
          border-radius: 5px;
          border: 1px solid rgb(220, 220, 220);
          margin-bottom: 10px;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  );
};

// Called at build time and renders the page to static HTML.
export async function unstable_getStaticProps() {
  try {
    const response = await fetch('https://api.protonmail.ch/payments/plans', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'x-pm-appversion': 'Other',
        'x-pm-apiversion': '3',
        Accept: 'application/vnd.protonmail.v1+json',
      },
    });

    if (response.status >= 300) {
      throw new Error(
        `Cannot fetch plans data, status code: ${response.status}`
      );
    }

    const json = await response.json();

    // As per agreement, i'm fetching the API and filter down only the plans i'm interested in
    const plans = json.Plans.reduce((acc, curr) => {
      if (
        curr.Name === 'plus' ||
        curr.Name === 'professional' ||
        curr.Name === 'visionary'
      ) {
        acc.push(curr);
      }
      return acc;
    }, []);

    // i'm adding the missing Free plan
    plans.unshift({
      ID:
        'Fr3E-BaaaaaaaaaaaaapqQbd1FITVWYfTfKYUmV_wKKR3GsveN4HZCh9er5dhelYylEp-fhjBbUPDMHGU699fw==',
      Type: 1,
      Name: 'free',
      Title: 'The basic for private and secure communication',
      MaxDomains: 0,
      MaxAddresses: 1,
      MaxSpace: 536870912,
      MaxMembers: 1,
      MaxVPN: 0,
      Services: 1,
      Features: 0,
      Pricing: {
        '1': 0,
        '12': 0,
        '24': 0,
      },
      Currency: 'CHF',
      Quantity: 1,
      Cycle: 1,
      Amount: 500,
    });

    return {
      props: {
        plans,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default HomePage;
