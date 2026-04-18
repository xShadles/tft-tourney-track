import { useState, useEffect } from 'react'
import { supabase } from '../context/SupabaseClient';
import { useNavigate } from 'react-router';
import TouneryPagination from '../props/TourneyPagination';

const TournamentCardAdmin = () => {

    const [tourney, setTourney] = useState<any[]>([])
    const [message, setMessage] = useState("");
    const [page, setPage] = useState(1);

    const viewLobby = useNavigate()

    async function findTournaments() {
        const { data, error } = await supabase
            .from('tournaments')
            .select('*');

        if (error) {
            setMessage(error.message);
        } else {
            setTourney(data || [])
        }
    }

    useEffect(() => {
        findTournaments()
    }, [])

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const CARDS_PER_PAGE = 12;

    const pageCount = Math.ceil(tourney.length / CARDS_PER_PAGE);
    const paginatedTourneys = tourney.slice(
        (page - 1) * CARDS_PER_PAGE,
        page * CARDS_PER_PAGE
    );

    return (
        <div className='flex-col justify-items-center items-center'>
            {message && <span>{message}</span>}
            <div className="grid grid grid-cols-3 grid-rows-2 gap-14 w-450 h-250">
                {paginatedTourneys.map((tourney) => (
                    <div className="rounded-xl border-4 border-white-600 shadow-xl mb-6 mt-2">
                        <div className="bg-[url('https://tftable.cc/set17/hero-bg-v2.webp')] bg-cover h-6/10 p-10">
                            <h3>{tourney.name}</h3>
                        </div>
                        <p>Prize Pool: ${tourney.prize_pool}</p>
                        <p>{tourney.start_date} - {tourney.end_date}</p>
                        <p>at {tourney.start_time} EST</p>
                        <button
                            className="px-10 py-1 font-bold text-s bg-white cursor-pointer text-orange-950 rounded-xl border-2 border-orange-950 hover:bg-orange-950 hover:text-orange-500 hover:border-orange-500 focus:outline-2 focus:outline-offset-2 transition"
                            onClick={() => viewLobby(`/adminlobbies/${tourney.id}`)}
                        >Manage
                        </button>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <TouneryPagination
                    count={pageCount}
                    page={page}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default TournamentCardAdmin