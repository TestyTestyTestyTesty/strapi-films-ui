import Link from "next/link";

const FilmsList = ({ films }: any) => {
    return (
        <ul className="list-none space-y-4 text-4xl font-bold mb-3">
            {films &&
                films.map((film: any) => {
                    return (
                        <li key={film.id} className="text-center">
                            <Link href={`film/` + film.attributes.slug}>
                                {film.attributes.title}
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

export default FilmsList;
