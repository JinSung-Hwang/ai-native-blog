interface Author {
  name: string
  bio: string
  avatarUrl: string
}

export default function AuthorProfile({ author }: { author: Author }) {
  return (
    <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-700">
      <div className="flex items-center gap-4">
        <img
          src={author.avatarUrl}
          alt={author.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {author.name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
