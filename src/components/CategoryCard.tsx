import { useState } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  subcategories: string[];
  description: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon: Icon, 
  subcategories,
  description 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "group relative bg-[var(--app-bg-soft)] rounded-3xl p-6 border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--primary)]/5 flex flex-col h-full",
        isExpanded ? "ring-2 ring-[var(--primary)]/20" : ""
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-inner">
          <Icon size={32} />
        </div>
      </div>

      <h3 className="text-xl font-bold font-outfit text-[var(--app-text)] mb-2">
        {title}
      </h3>
      
      <p className="text-[var(--app-text-muted)] text-sm mb-6 flex-grow">
        {description}
      </p>

      <div className="mt-auto space-y-4">
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
