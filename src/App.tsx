import { Search } from "lucide-react";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { Modal } from "./components/Modal";
import { PhantomCard } from "./components/PhantomCard";
import { SortSelect } from "./components/SortSelect";
import { TagFilter } from "./components/TagFilter";
import phantoms from "./data/phantoms.json";
import type { Phantom, PhantomTag, SortState } from "./types";

const allPhantoms = phantoms as Phantom[];
const allTags: PhantomTag[] = ["LinkedIn", "Sales Navigator", "Google", "Instagram", "HubSpot"];

function App() {
  const [showModal, setShowModal] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<PhantomTag | null>(null);
  const [sort, setSort] = useState<SortState>({ key: null, direction: 'asc' });

  const filtered = allPhantoms
    .filter((phantom) => {
      const matchesQuery = phantom.title.toLowerCase().includes(query.toLowerCase());
      const matchesTag = activeTag === null || phantom.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    })
    .sort((a, b) => {
      if (!sort.key) return 0;
      const dir = sort.direction === 'asc' ? 1 : -1;
      if (sort.key === "name") return a.title.localeCompare(b.title) * dir;
      if (sort.key === "slots") return (a.slots - b.slots) * dir;
return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">All Phantoms</h1>
        <InputField
          placeholder="Search phantoms..."
          icon={<Search size={16} />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <TagFilter
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </div>
        <SortSelect value={sort} onChange={setSort} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((phantom) => (
            <PhantomCard key={phantom.id} phantom={phantom} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-12">
            No phantoms found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
