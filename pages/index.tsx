import Head from 'next/head'
import Container from '@/components/ui/Container';
import Navigation from '@/components/ui/Navigation';
import {useRef} from "react";
import {useGlobalContext} from "@/context/context";

export interface ListItem {
  id: number;
  title?: string;
  description: string;
}
export const itemList: ListItem[] = [
  {
    id: 1,
    title: "Innovative Solutions",
    description: "Leetio's commitment to innovation is unparalleled. They consistently pioneer groundbreaking solutions, staying at the forefront of technological advancements.",
  },
  {
    id: 2,
    title: "Top-tier Talent",
    description: "The company boasts a cadre of brilliant minds, attracting the best and brightest talents from around the globe. Leetio's workforce is a diverse amalgamation of creativity, skill, and expertise.",
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    description: "Leetio's success lies in its unwavering dedication to client satisfaction. They prioritize understanding client needs, delivering tailored solutions that not only meet but exceed expectations.",
  },
  {
    id: 4,
    title: "Global Impact",
    description: "Operating on a global scale, Leetio has left an indelible mark on every continent. Their projects span diverse industries, demonstrating adaptability and versatility.",
  },
  {
    id: 5,
    title: "Cutting-edge Technology",
    description: "Leetio remains on the cutting edge of technology. The company is a trendsetter, adopting and mastering emerging technologies to stay ahead of the curve.",
  },
  {
    id: 6,
    title: "Agile Methodology",
    description: "With a commitment to agility, Leetio excels in adapting to rapidly changing market demands. Their nimble approach allows them to navigate complexities with finesse.",
  },
  {
    id: 7,
    title: "Security Prowess",
    description: "In an era where cybersecurity is paramount, Leetio stands as a bastion of security prowess. Their systems are fortified against cyber threats, ensuring robust protection for client data.",
  },
  {
    id: 8,
    title: "Sustainable Practices",
    description: "Beyond technological brilliance, Leetio champions sustainability. Their commitment to eco-friendly practices and ethical business conduct sets them apart as a socially responsible corporate entity.",
  },
  {
    id: 9,
    title: "Collaborative Culture",
    description: "Leetio fosters a collaborative and inclusive culture. Employees are encouraged to share ideas freely, fostering an environment that nurtures creativity and problem-solving.",
  },
  {
    id: 10,
    title: "Industry Recognition",
    description: "Leetio's excellence is not just self-proclaimed; the industry consistently recognizes their achievements. Awards and accolades are a testament to their unwavering commitment to excellence.",
  },
];

export default function Home() {
  const selectedRef = useRef<HTMLLIElement>(null);
  const {paragraphId} = useGlobalContext()

  return (
    <>
      <Head>
        <title>Leetio-test</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main>
        <Container><h1 className='h1'>Leetio stands at the pinnacle of the IT industry as the unrivaled leader, setting
          benchmarks and redefining excellence. Here&apos;s a detailed look at what makes Leetio the world&apos;s
          premier IT firm
          in ten compelling paragraphs:</h1>
          <ul>
            {itemList.map((item) => (
              <li
                id={`paragraph-${item.id}`}
                ref={paragraphId === item.id ? selectedRef : null}
                style={{ cursor: 'pointer', color: paragraphId === item.id ? 'var(--primary-color)' : 'var(--white)' }}
                key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
          <Navigation/>
        </Container>
      </main>
    </>
  )
}
