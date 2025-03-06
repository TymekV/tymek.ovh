import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Card } from '../Card';
import { card, day, heatMap } from './styles';

const apolloClient = new ApolloClient({
    uri: 'https://api.github.com/graphql', // Replace with your actual GraphQL endpoint
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
});

const QUERY = gql`query($userName:String!) { 
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}`;

type ContributionDay = {
    __typename: 'ContributionCalendarDay';
    contributionCount: number;
    date: string;
}

type ContributionWeek = {
    __typename: 'ContributionCalendarWeek';
    contributionDays: ContributionDay[];
}

export default async function HeatMapCard() {
    try {
        const { data } = await apolloClient.query({
            query: QUERY,
            variables: { userName: process.env.GITHUB_USERNAME },
        });

        if (!data) {
            return <p>Error loading item.</p>;
        }

        const days = data.user.contributionsCollection.contributionCalendar.weeks.flatMap((w: ContributionWeek) => w.contributionDays as ContributionDay[]);

        return (
            <Card className={card}>
                <div className={heatMap}>
                    {days.map((d: ContributionDay, i: number) => {
                        const colors = ['#181818', '#0D4429', '#016D32', '#27A641', '#3AD353'];
                        const color = colors[Math.min(d.contributionCount, colors.length - 1)];
                        return (
                            <div key={i} className={day()} style={{ backgroundColor: color }} />
                        );
                    })}
                </div>
            </Card>
        )
    } catch (error) {
        console.error("Apollo Query Error:", error);
        return <p>Error loading item.</p>;
    }
}