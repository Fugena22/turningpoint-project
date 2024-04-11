import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container py-8 space-y-8">
      <div>
        <Button variant="default" size="sm">
          Default
        </Button>
        <Button variant="default" size="default">
          Default
        </Button>
        <Button variant="default" size="lg">
          Default
        </Button>
      </div>
      <div>
        <Button variant="outline" size="sm">
          Outline
        </Button>
        <Button variant="outline" size="default">
          Outline
        </Button>
        <Button variant="outline" size="lg">
          Outline
        </Button>
      </div>
      <div>
        <Button variant="link" size="sm">
          Link
        </Button>
        <Button variant="link" size="default">
          Link
        </Button>
        <Button variant="link" size="lg">
          Link
        </Button>
      </div>
    </div>
  );
}
