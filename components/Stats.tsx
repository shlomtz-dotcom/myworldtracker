const TOTAL_COUNTRIES = 195

export default function Stats({ visited }: { visited: string[] }) {
  const percent = ((visited.length / TOTAL_COUNTRIES) * 100).toFixed(1)

  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center gap-6">
      <div className="text-2xl font-bold">{visited.length}</div>
      <div>
        <div>Countries visited</div>
        <div className="text-sm text-gray-600">{percent}% of the world</div>
      </div>
    </div>
  )
}