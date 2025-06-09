import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  titleIcon?: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
}

export function Section({ title, description, children, className, titleIcon, titleClassName, contentClassName, headerClassName }: SectionProps) {
  return (
    <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border-border rounded-xl", className)}>
      <CardHeader className={cn("pb-4 md:pb-6", headerClassName)}>
        <CardTitle className={cn("flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-semibold text-primary", titleClassName)}>
          {titleIcon}
          {title}
        </CardTitle>
        {description && <CardDescription className="text-md md:text-lg text-muted-foreground mt-1 md:mt-2">{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("pt-0", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
