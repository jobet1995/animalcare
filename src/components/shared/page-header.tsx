type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section
      className={`py-12 md:py-16 text-center bg-secondary/30 ${className}`}
    >
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl font-headline">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
