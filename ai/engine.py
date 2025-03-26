def analyze_need(text: str) -> dict:
    """Simple placeholder for GPT-based need classification"""
    text = text.lower()
    if "macbook" in text or "laptop" in text:
        return {"category": "electronics", "priority": "high"}
    elif "rent" in text:
        return {"category": "housing", "priority": "medium"}
    else:
        return {"category": "general", "priority": "low"}

if __name__ == "__main__":
    example = "Need: MacBook Pro 2020, used, excellent condition"
    print(analyze_need(example))
