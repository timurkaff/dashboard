export function DefaultContent({ activeItem }) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">{activeItem}</h1>
        <p>Content for {activeItem} coming soon...</p>
      </div>
    );
  }