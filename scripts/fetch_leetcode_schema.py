import json
import os
import sys
import requests

USERNAME = sys.argv[1] if len(sys.argv) > 1 else "shammykr"

QUERY = """
query userProblemsSolved($username: String!) {
  allQuestionsCount { difficulty count }
  matchedUser(username: $username) {
    submitStatsGlobal {
      acSubmissionNum { difficulty count }
    }
  }
}
"""

def to_map(items):
    # items look like [{"difficulty":"Easy","count":123}, ...]
    out = {}
    for x in items or []:
        out[str(x.get("difficulty", "")).lower()] = int(x.get("count", 0))
    return out

def main():
    url = "https://leetcode.com/graphql"
    headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (GitHub Actions; LeetCode stats fetch)",
        "Referer": "https://leetcode.com/",
    }
    payload = {
        "query": QUERY,
        "variables": {"username": USERNAME},
        "operationName": "userProblemsSolved",
    }

    r = requests.post(url, headers=headers, json=payload, timeout=30)
    r.raise_for_status()
    resp = r.json()

    data = resp.get("data") or {}
    matched = (data.get("matchedUser") or {})
    submit = ((matched.get("submitStatsGlobal") or {}).get("acSubmissionNum") or [])
    allq = data.get("allQuestionsCount") or []

    if not matched:
        raise RuntimeError(f"User not found / blocked: {resp}")

    solved = to_map(submit)
    totals = to_map(allq)

    # Build EXACT schema your script.js expects :contentReference[oaicite:1]{index=1}
    out = {
        "status": "success",
        "message": "retrieved",
        "totalSolved": solved.get("all", 0),
        "easySolved": solved.get("easy", 0),
        "mediumSolved": solved.get("medium", 0),
        "hardSolved": solved.get("hard", 0),

        "totalQuestions": totals.get("all", 0),
        "totalEasy": totals.get("easy", 0),
        "totalMedium": totals.get("medium", 0),
        "totalHard": totals.get("hard", 0),

        "username": USERNAME,
    }

    os.makedirs("assets", exist_ok=True)
    # write tmp first; workflow will mv on success (prevents overwriting with junk)
    with open("assets/leetcode.tmp.json", "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False)

if __name__ == "__main__":
    main()