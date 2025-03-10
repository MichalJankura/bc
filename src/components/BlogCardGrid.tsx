import { useState } from 'react';

interface BlogCardProps {
  title: string;
  author: string;
  category: string;
  date: string;
  shortText: string;
  fullText: string;
  image: string;
}

const BlogCard = ({
  title,
  author,
  category,
  date,
  shortText,
  fullText,
  image,
}: BlogCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <a
        className="group block rounded-xl overflow-hidden focus:outline-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
              src={image}
              alt="Blog Image"
            />
          </div>
          <div className="grow">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {author} - {category} - {date}
            </p>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              {shortText}
            </p>
          </div>
        </div>
      </a>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {author} - {category} - {date}
            </p>
            <img
              className="w-full h-64 object-cover rounded mb-4"
              src={image}
              alt="Blog Image"
            />
            <p className="text-gray-700">{fullText}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BlogCardGrid = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      title: 'Studio by Preline',
      author: 'John Doe',
      category: 'Tech',
      date: '2023',
      shortText: 'Short text about Studio by Preline...',
      fullText: 'Full article about Studio by Preline...',
      image:
        'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'Onsite',
      author: 'Jane Smith',
      category: 'Event',
      date: '2022',
      shortText: 'Short text about Onsite...',
      fullText: 'Full article about Onsite...',
      image:
        'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'The complete guide to OKRs',
      author: 'Alice Brown',
      category: 'Business',
      date: '2023',
      shortText: 'Short text about OKRs...',
      fullText: 'Full article about OKRs...',
      image:
        'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
    {
      title: 'People program models',
      author: 'Bob Johnson',
      category: 'HR',
      date: '2021',
      shortText: 'Short text about People program models...',
      fullText: 'Full article about People program models...',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedYear === 'All' || post.date === selectedYear) &&
      (selectedCategory === 'All' || post.category === selectedCategory) &&
      (selectedAuthor === 'All' || post.author === selectedAuthor)
  );

  const postsPerPage = 4;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex gap-6">
      <div className="w-1/4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <select
          className="mt-2 w-full p-2 border rounded"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option>All</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
        <select
          className="mt-2 w-full p-2 border rounded"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All</option>
          <option>Tech</option>
          <option>Event</option>
          <option>Business</option>
          <option>HR</option>
        </select>
        <select
          className="mt-2 w-full p-2 border rounded"
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          <option>All</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
          <option>Alice Brown</option>
          <option>Bob Johnson</option>
        </select>
      </div>
      <div className="w-3/4">
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {displayedPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;
