import { useState } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  subcategories: string[];
  description: string;
  image?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon: Icon, 
  subcategories,
  description,
  image
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "group relative bg-[var(--app-bg)] rounded-[2rem] overflow-hidden border border-[var(--card-border)] shadow-[0_15px_30px_-5px_rgba(8,145,178,0.1)] dark:shadow-none hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(8,145,178,0.25)] flex flex-col h-full",
        isExpanded ? "ring-2 ring-[var(--primary)]/20" : ""
      )}
    >
      {/* Header Image or Icon */}
      {image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
             <h3 className="text-xl font-bold font-outfit text-white">
                {title}
             </h3>
          </div>
        </div>
      ) : (
        <div className="p-6 pb-0 flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
            <Icon size={28} />
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {!image && (
          <h3 className="text-xl font-bold font-outfit text-[var(--app-text)] mb-2">
            {title}
          </h3>
        )}
        <p className="text-[var(--app-text-muted)] text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto p-6 pt-0 space-y-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 px-6 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <ChevronRight size={16} className={cn("transition-transform duration-300", isExpanded ? "rotate-90" : "group-hover/btn:translate-x-1")} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-2 flex flex-wrap gap-2">
                {subcategories.map((sub, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-[var(--app-bg)] text-[var(--app-text-muted)] text-[10px] rounded-full border border-[var(--card-border)] font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-[var(--primary)] text-white rounded-xl font-bold text-sm hover:bg-[var(--primary-hover)] transition-colors">
                Descargar App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/0 via-transparent to-[var(--primary)]/0 group-hover:from-[var(--primary)]/[0.03] pointer-events-none transition-all duration-700" />
    </div>
  );
};
