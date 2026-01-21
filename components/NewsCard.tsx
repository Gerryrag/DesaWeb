
import React from 'react';
import { Calendar } from 'lucide-react';
import { NewsItem } from '../types';

interface Props {
  news: NewsItem;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full">
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-semibold uppercase tracking-wider">
            {news.category}
          </span>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {news.date}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {news.excerpt}
        </p>
        <button className="mt-auto text-sm font-bold text-gray-900 hover:text-blue-600 flex items-center group">
          Baca Selengkapnya
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </article>
  );
};

export default NewsCard;
