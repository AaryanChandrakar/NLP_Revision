import { useState } from "react";

const sections = [
  {
    id: "why-nlp",
    emoji: "🧠",
    title: "Why NLP? The Big Picture",
    color: "#00d4ff",
    content: [
      {
        type: "concept",
        title: "What is NLP?",
        body: `Natural Language Processing (NLP) is a field of AI that enables computers to read, understand, and generate human language — the way humans communicate naturally.`,
      },
      {
        type: "analogy",
        title: "📦 Analogy: Teaching a Robot to Read",
        body: `Imagine you hire a robot assistant. It can do math perfectly. But if you say "Can you grab me a coffee?" — it freezes. It doesn't understand human language. NLP is the toolkit that trains the robot to understand and respond to YOU — not just binary commands.`,
      },
      {
        type: "example",
        title: "Real-World Examples",
        items: [
          "Google Search — understands 'best pizza near me tonight'",
          "Gmail Smart Reply — 'Sure, sounds good!'",
          "Alexa/Siri — voice → text → intent → action",
          "ChatGPT — full conversational AI",
          "Sentiment Analysis — 'This product is terrible!' → Negative",
          "Machine Translation — English → French instantly",
        ],
      },
      {
        type: "interview",
        title: "🎯 Interview Answer Template",
        body: `"NLP stands for Natural Language Processing. It bridges the gap between human language and machine understanding. Machines understand numbers, but humans communicate in text, context, and emotion. NLP converts unstructured language data into structured representations so machines can process, analyze, and generate meaningful responses. It powers everything from search engines to chatbots to translation tools."`,
      },
    ],
  },
  {
    id: "evolution",
    emoji: "🔄",
    title: "Evolution of NLP — Timeline",
    color: "#ff6b35",
    content: [
      {
        type: "timeline",
        items: [
          {
            era: "1950s–1980s",
            label: "Rule-Based NLP",
            desc: "Handcrafted grammar rules. If-else logic. 'If sentence contains WILL → future tense.' Brittle, doesn’t scale.",
            tag: "GOFAI",
          },
          {
            era: "1990s–2000s",
            label: "Statistical NLP",
            desc: "Count word frequencies. N-gram models. Naive Bayes for spam detection. Better but no semantic understanding.",
            tag: "ML Era",
          },
          {
            era: "2000s–2013",
            label: "Machine Learning NLP",
            desc: "SVMs, Logistic Regression, TF-IDF. Bag of Words. Still treats words as isolated tokens, no meaning.",
            tag: "Shallow ML",
          },
          {
            era: "2013–2017",
            label: "Word Embeddings (Word2Vec, GloVe)",
            desc: "Words become vectors. 'King - Man + Woman = Queen'. Semantic meaning captured. Revolutionary!",
            tag: "Semantic Era",
          },
          {
            era: "2017–2018",
            label: "Sequence Models (RNN, LSTM, GRU)",
            desc: "Words processed in order. Memory of previous words. Better for translation, sentiment. But slow, forgets long context.",
            tag: "Sequential",
          },
          {
            era: "2017",
            label: "Attention Mechanism",
            desc: '"Attention is All You Need" paper. Model learns WHICH words to focus on. Game changer.',
            tag: "⚡ Breakthrough",
          },
          {
            era: "2018–Now",
            label: "Transformers & LLMs (BERT, GPT, T5…)",
            desc: "Parallel processing. Contextual embeddings. Transfer learning. Pretrain on billions of words, fine-tune for tasks.",
            tag: "Modern NLP",
          },
        ],
      },
      {
        type: "analogy",
        title: "📦 Analogy: Evolution of Understanding 'Bank'",
        body: `Rule-Based: "Bank" = financial institution (hardcoded). Statistical: "Bank" appears near "money" 70% → likely financial. Word2Vec: "Bank" vector is similar to "credit", "loan". Transformer (BERT): "I sat by the river bank" → bank = riverbank ✅ "I deposited money at the bank" → bank = financial ✅ Context changes meaning. THAT is the revolution.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"NLP evolved from rigid rule-based systems to statistical approaches, then to ML-based models, then to deep learning embeddings like Word2Vec that captured semantic meaning. The real breakthrough was the 2017 Transformer paper which introduced self-attention — allowing models to understand context across an entire sentence at once, rather than word by word. This enabled models like BERT and GPT that understand language deeply and power modern AI applications."`,
      },
    ],
  },
  {
    id: "preprocessing",
    emoji: "🔧",
    title: "Text Preprocessing Pipeline",
    color: "#a855f7",
    content: [
      {
        type: "concept",
        title: "Why Preprocessing?",
        body: `Raw text is noisy. Machines can't handle "Hello!!!", "hello", "HELLO" as the same word without cleaning. Preprocessing standardizes text so models can learn patterns.`,
      },
      {
        type: "pipeline",
        steps: [
          {
            step: "1. Lowercasing",
            example: '"Hello World" → "hello world"',
            why: "Treats Hello and hello as the same token",
          },
          {
            step: "2. Tokenization",
            example: '"I love NLP" → ["I", "love", "NLP"]',
            why: "Splits text into processable units (words/subwords)",
          },
          {
            step: "3. Stop Word Removal",
            example: '"I love NLP" → ["love", "NLP"]',
            why: "Remove filler words (I, the, is, are) that carry little meaning",
          },
          {
            step: "4. Stemming",
            example: '"running", "runs", "ran" → "run"',
            why: "Reduce words to root form. Fast but crude (studies → studi ❌)",
          },
          {
            step: "5. Lemmatization",
            example: '"better" → "good", "running" → "run"',
            why: "Proper root using dictionary. Slower but accurate",
          },
          {
            step: "6. Removing Punctuation/Noise",
            example: '"Hello!!! @user #nlp" → "Hello user nlp"',
            why: "Remove special chars, URLs, HTML tags",
          },
          {
            step: "7. N-grams",
            example: '"New York" as bigram, not two words',
            why: "Captures multi-word meaning",
          },
          {
            step: "8. Vectorization (TF-IDF / BOW)",
            example: "Text → numeric matrix for ML models",
            why: "ML models need numbers, not words",
          },
        ],
      },
      {
        type: "analogy",
        title: "📦 Analogy: Chef Preparing Ingredients",
        body: `Before cooking, a chef washes (clean noise), chops (tokenize), removes bad parts (stop words), and measures (vectorize). You can't cook with raw, unprocessed ingredients. Same with NLP — raw text needs preprocessing before a model can 'cook' insights from it.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"Text preprocessing transforms raw, messy text into clean, structured input for NLP models. Key steps are: lowercasing for uniformity, tokenization to split text into tokens, removing stop words that add noise, stemming/lemmatization to normalize word forms, and vectorization (TF-IDF or word embeddings) to convert text to numbers. In modern transformer models like BERT, subword tokenization (WordPiece/BPE) is used instead, which handles unknown words better."`,
      },
    ],
  },
  {
    id: "representations",
    emoji: "🔢",
    title: "Text Representations — From BOW to Embeddings",
    color: "#10b981",
    content: [
      {
        type: "concept",
        title: "The Core Problem",
        body: `ML models need numbers. Text is strings. How do we convert text to numbers while preserving MEANING? This is the core representation challenge in NLP.`,
      },
      {
        type: "comparison",
        items: [
          {
            name: "Bag of Words (BOW)",
            desc: "Count word occurrences. No order, no meaning.",
            example: '"I love NLP" → {I:1, love:1, NLP:1}',
            pro: "Simple, fast",
            con: "Ignores word order and meaning",
          },
          {
            name: "TF-IDF",
            desc: "Term Frequency × Inverse Document Frequency. Rare important words get higher scores.",
            example: '"NLP" in one doc gets high score; "the" gets low score',
            pro: "Better than BOW for info retrieval",
            con: "Still no semantic meaning",
          },
          {
            name: "Word2Vec",
            desc: "Neural network maps words to dense vectors in meaning space.",
            example: "King(1,0.9) - Man(0.5,0.1) + Woman(0.5,0.8) ≈ Queen(1,0.8)",
            pro: "Captures semantic similarity",
            con: "One vector per word — no context",
          },
          {
            name: "GloVe",
            desc: "Global Vectors. Uses co-occurrence statistics across entire corpus.",
            example: '"ice" and "steam" both relate to "water"',
            pro: "Better global context than Word2Vec",
            con: "Still static embeddings",
          },
          {
            name: "Contextual (BERT/ELMo)",
            desc: "Same word, different vector based on sentence context.",
            example: '"bank" vector differs in river vs. finance context',
            pro: "True understanding of meaning",
            con: "Computationally heavy",
          },
        ],
      },
      {
        type: "analogy",
        title: "📦 Analogy: Maps of Meaning",
        body: `Think of word embeddings as a city map where similar words live near each other. 'Dog' and 'Cat' are in the same neighborhood. 'King' and 'Queen' are nearby. 'Apple' (fruit) and 'Apple' (company) — BOW puts them in the same spot; BERT puts them in different neighborhoods based on context.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"We evolved from Bag of Words (counts words, loses meaning and order), to TF-IDF (weights important words), to Word2Vec and GloVe (dense semantic vectors — similar words cluster together), to contextual embeddings like ELMo and BERT where the same word gets different vectors based on its context in the sentence. This progression is what enabled NLP to go from pattern matching to genuine language understanding."`,
      },
    ],
  },
  {
    id: "semantic-to-contextual",
    emoji: "💡",
    title: "Semantic → Contextual: The Critical Leap",
    color: "#f59e0b",
    content: [
      {
        type: "concept",
        title: "Semantic Meaning (Word2Vec Era)",
        body: `Semantic meaning = understanding that words have related meanings. Word2Vec learned: 'happy' is similar to 'joyful'. 'Paris' is to 'France' as 'Berlin' is to 'Germany'. This was revolutionary — machines finally understood word relationships.`,
      },
      {
        type: "concept",
        title: "The Problem: Polysemy",
        body: `But words have MULTIPLE meanings:
• "I went to the river BANK" → nature
• "I deposited money at the BANK" → finance
• "The plane can fly" vs "Time flies like an arrow"

Word2Vec gave ONE vector for "bank" — averaged across all contexts. WRONG for specific sentences.`,
      },
      {
        type: "concept",
        title: "Contextual Meaning (BERT Era)",
        body: `Contextual embeddings change the word’s vector based on the ENTIRE sentence context.
Same word → different representation → correct meaning every time.
This is what ELMo (2018) and BERT (2018) achieved.`,
      },
      {
        type: "analogy",
        title: "📦 Analogy: The Word 'Right'",
        body: `"Turn right at the signal" → direction
"You are absolutely right" → correct
"Everyone has a right to speak" → entitlement

A human instantly knows which meaning. Word2Vec confused them all with one average vector. BERT reads the whole sentence first, then assigns the CORRECT meaning vector. That’s contextual understanding.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"Semantic meaning, captured by Word2Vec and GloVe, understood that words have relationships — 'doctor' is similar to 'nurse'. But these were static embeddings — one fixed vector per word. Contextual meaning, achieved by models like ELMo and BERT, generates dynamic vectors that change based on surrounding words in a sentence. This solved the polysemy problem — where a word like 'bank' means different things in different sentences. The shift from semantic to contextual representations is what enabled modern NLP to understand language the way humans do."`,
      },
    ],
  },
  {
    id: "rnn-lstm",
    emoji: "🔁",
    title: "RNN, LSTM, GRU — Sequential Models",
    color: "#ef4444",
    content: [
      {
        type: "concept",
        title: "Why Sequential Models?",
        body: `Language is sequential. "The cat sat on the mat" — word order matters. BOW/TF-IDF lose order. We need models that process words IN SEQUENCE and remember previous context.`,
      },
      {
        type: "comparison",
        items: [
          {
            name: "RNN (Recurrent Neural Network)",
            desc: "Processes words one by one, passing hidden state to next step.",
            example: "h_t = f(h_{t-1}, x_t) — each word influenced by previous",
            pro: "Handles sequences",
            con: "Vanishing gradient — forgets early words in long sentences",
          },
          {
            name: "LSTM (Long Short-Term Memory)",
            desc: "Adds memory cells with gates: forget gate, input gate, output gate.",
            example: "Remembers 'he' from sentence start when predicting 'his' at end",
            pro: "Handles long-range dependencies",
            con: "Still slow (sequential), hard to parallelize",
          },
          {
            name: "GRU (Gated Recurrent Unit)",
            desc: "Simplified LSTM with reset and update gates.",
            example: "Fewer parameters than LSTM, similar performance",
            pro: "Faster than LSTM",
            con: "Still sequential bottleneck",
          },
        ],
      },
      {
        type: "analogy",
        title: "📦 Analogy: Reading a Book",
        body: `RNN = Reading word by word but forgetting the first chapter by the time you reach chapter 10.
LSTM = Reading with sticky notes — you pin important info and can refer back.
GRU = A faster sticky-note system with slightly fewer notes.
Transformer = Reading the ENTIRE book at once and connecting any two sentences simultaneously.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"RNNs introduced sequential processing of text, maintaining a hidden state as memory. But they suffered from vanishing gradients — failing to remember context from early in long sequences. LSTMs solved this with gating mechanisms (forget, input, output gates) that selectively retain important information. GRUs are a lighter variant. However, both are sequential — you can’t parallelize training — making them slow. This bottleneck motivated the Transformer, which processes all words simultaneously using self-attention."`,
      },
    ],
  },
  {
    id: "attention-transformer",
    emoji: "⚡",
    title: "Attention Mechanism & Transformers",
    color: "#6366f1",
    content: [
      {
        type: "concept",
        title: "The 'Attention is All You Need' Revolution (2017)",
        body: `Vaswani et al. (Google) introduced the Transformer architecture. Core idea: instead of processing sequentially, let every word ‘attend’ to every other word simultaneously. No more vanishing gradients. Fully parallelizable. Scales to billions of parameters.`,
      },
      {
        type: "concept",
        title: "Self-Attention: The Core Mechanism",
        body: `For each word, compute:
• Query (Q) — "What am I looking for?"
• Key (K) — "What do I contain?"
• Value (V) — "What do I share if matched?"

Attention Score = softmax(Q × K^T / √d_k) × V

Every word attends to every other word. The model learns WHICH words matter for understanding each word.`,
      },
      {
        type: "example",
        title: "Self-Attention in Action",
        items: [
          '"The animal didn\'t cross the street because IT was too tired"',
          "→ 'it' attends strongly to 'animal' (not 'street')",
          '"The animal didn\'t cross the street because IT was too wide"',
          "→ 'it' attends strongly to 'street' (not 'animal')",
          "Same word 'it' — different attention → different contextual vector!",
        ],
      },
      {
        type: "concept",
        title: "Transformer Architecture",
        body: `ENCODER: Reads input, builds rich contextual representations.
→ Used in: BERT (classification, NER, QA)

DECODER: Generates output tokens one by one, attends to encoder output.
→ Used in: GPT (text generation)

ENCODER-DECODER: For seq2seq tasks.
→ Used in: T5, BART (translation, summarization)

Key components:
• Multi-Head Attention (attend to different aspects simultaneously)
• Positional Encoding (inject word order since attention is position-agnostic)
• Feed-Forward layers, Layer Norm, Residual connections`,
      },
      {
        type: "analogy",
        title: "📦 Analogy: The Meeting Room",
        body: `In a meeting with 10 people:
RNN/LSTM = Passing a note person to person. By the time person 10 sees it, they’ve forgotten what person 1 said.
Transformer = Everyone sits in a circle and can SHOUT to anyone. Person 10 directly hears person 1. Every conversation happens simultaneously. That’s self-attention.

Multi-head attention = Multiple meetings happening at once — one focused on grammar, one on meaning, one on sentiment.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"The Transformer, introduced in 2017, solved the sequential bottleneck of RNNs. Its core is self-attention — each word computes Query, Key, Value vectors. The attention score between any two words tells the model how much to ‘attend’ to one word when encoding another. Multi-head attention runs this in parallel across different representation subspaces. Positional encoding preserves word order since attention itself is position-agnostic. The result: fully parallelizable training, better long-range dependency capture, and a foundation for BERT, GPT, and all modern LLMs."`,
      },
    ],
  },
  {
    id: "bert-gpt",
    emoji: "🤖",
    title: "BERT vs GPT — The Two Paradigms",
    color: "#14b8a6",
    content: [
      {
        type: "comparison",
        items: [
          {
            name: "BERT (Google, 2018)",
            desc: "Bidirectional Encoder. Reads entire sentence left AND right simultaneously.",
            example: '"The [MASK] sat on the mat" → predicts "cat" using both sides',
            pro: "Great for understanding tasks: NER, QA, Classification",
            con: "Not designed for text generation",
          },
          {
            name: "GPT (OpenAI, 2018→)",
            desc: "Unidirectional Decoder. Predicts next word autoregressively.",
            example: '"Once upon a time" → generates "there was a..." word by word',
            pro: "Excellent text generation, creative tasks",
            con: "Only sees left context during training",
          },
          {
            name: "T5 / BART",
            desc: "Encoder-Decoder. Frame all NLP tasks as text-to-text.",
            example: '"Translate English to French: Hello" → "Bonjour"',
            pro: "Unified framework for all NLP tasks",
            con: "More complex to train",
          },
        ],
      },
      {
        type: "concept",
        title: "BERT's Training: MLM + NSP",
        body: `Masked Language Model (MLM): Randomly mask 15% of tokens → predict them.
"The [MASK] sat on the [MASK]" → cat, mat
Forces bidirectional understanding.

Next Sentence Prediction (NSP): Is sentence B the actual next sentence after A?
Learns sentence relationships for QA and inference tasks.`,
      },
      {
        type: "concept",
        title: "GPT's Training: Causal Language Model",
        body: `Predict the next token given all previous tokens.
"The cat" → "sat"
"The cat sat" → "on"
"The cat sat on" → "the"
Simple but at billion-parameter scale → emergent intelligence.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"BERT and GPT represent two fundamental paradigms. BERT uses a bidirectional encoder — it reads the entire sentence in both directions before making predictions, making it excellent for understanding tasks like NER, sentiment analysis, and QA. It’s trained with Masked Language Modeling. GPT uses a unidirectional decoder — predicting the next word given previous ones — making it ideal for generation tasks. It’s trained as a causal language model. When you need to classify or extract → BERT family. When you need to generate → GPT family."`,
      },
    ],
  },
  {
    id: "nlp-tasks",
    emoji: "📋",
    title: "Core NLP Tasks & Applications",
    color: "#ec4899",
    content: [
      {
        type: "example",
        title: "Fundamental NLP Tasks",
        items: [
          "🏷️ NER (Named Entity Recognition) — 'Apple CEO Tim Cook' → [ORG][PER]",
          "😊 Sentiment Analysis — 'Great product!' → Positive (0.97)",
          "🌐 Machine Translation — 'Bonjour' → 'Hello'",
          "📝 Text Summarization — 1000 words → 3 key sentences",
          "❓ Question Answering — 'Who wrote Hamlet?' → 'Shakespeare'",
          "📂 Text Classification — Email → Spam/Not Spam",
          "🗣️ Speech Recognition (ASR) — Audio → Text",
          "🔍 Information Extraction — Pull facts from documents",
          "💬 Dialogue Systems — Chatbots, virtual assistants",
          "📖 Language Generation — Code, stories, summaries",
        ],
      },
      {
        type: "concept",
        title: "Evaluation Metrics",
        body: `Classification: Accuracy, Precision, Recall, F1-Score
Generation: BLEU (translation), ROUGE (summarization), Perplexity (language model)
QA: Exact Match (EM), F1 overlap
Embeddings: Cosine similarity, Clustering quality`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer: NER Example",
        body: `"NER (Named Entity Recognition) identifies and classifies named entities in text. Input: 'Elon Musk founded SpaceX in 2002.' Output: [Elon Musk → PERSON], [SpaceX → ORG], [2002 → DATE]. Modern approach: fine-tune BERT on labeled NER data (CoNLL-2003). BERT gives contextual token embeddings → pass to classification head → predict BIO tags (Beginning, Inside, Outside of entity). Evaluation metric: F1-score per entity type."`,
      },
    ],
  },
  {
    id: "fine-tuning",
    emoji: "🎓",
    title: "Transfer Learning & Fine-Tuning",
    color: "#f97316",
    content: [
      {
        type: "concept",
        title: "The Pretrain → Fine-Tune Paradigm",
        body: `PHASE 1 — Pretraining: Train on massive unlabeled text (Wikipedia, books). Model learns language structure, facts, reasoning. Expensive: weeks on 100s of GPUs.

PHASE 2 — Fine-tuning: Take pretrained model, train on small task-specific labeled data. Few hours on 1 GPU.

Result: State-of-the-art on downstream tasks with minimal data.`,
      },
      {
        type: "analogy",
        title: "📦 Analogy: Medical Specialist",
        body: `Pretraining = 5 years of medical school (general knowledge: anatomy, biology, chemistry)
Fine-tuning = 2-year residency in cardiology (specific task)

You don’t teach a cardiologist basic biology again. You build ON TOP of existing knowledge. That’s transfer learning.`,
      },
      {
        type: "concept",
        title: "PEFT — Parameter Efficient Fine-Tuning",
        body: `Problem: Fine-tuning a 7B parameter model requires massive GPU memory.
Solutions:
• LoRA (Low-Rank Adaptation) — Freeze model weights, add small trainable rank-decomposition matrices
• Adapters — Insert small trainable layers between frozen transformer layers
• Prompt Tuning — Learn soft prompt tokens, freeze entire model
• QLoRA — LoRA + 4-bit quantization → fine-tune on consumer GPUs

Modern practice: QLoRA to fine-tune 7B/13B models on a single A100.`,
      },
      {
        type: "interview",
        title: "🎯 Interview Answer",
        body: `"Transfer learning in NLP follows a pretrain-then-fine-tune paradigm. Large models like BERT/GPT are pretrained on billions of tokens, learning rich language representations. For downstream tasks, we fine-tune on small labeled datasets — the model’s language knowledge transfers, so we need far less task-specific data. For resource efficiency, Parameter-Efficient Fine-Tuning methods like LoRA add a small number of trainable parameters while freezing most of the model, making it possible to fine-tune billion-parameter models on a single GPU."`,
      },
    ],
  },
  {
    id: "advanced",
    emoji: "🚀",
    title: "Advanced NLP — RAG, RLHF, Agents",
    color: "#8b5cf6",
    content: [
      {
        type: "comparison",
        items: [
          {
            name: "RAG (Retrieval Augmented Generation)",
            desc: "Retrieve relevant docs from knowledge base → feed to LLM as context → generate grounded answer.",
            example: "Query: 'Q3 revenue?' → Retrieve Q3 report → GPT answers from it",
            pro: "Up-to-date knowledge, less hallucination, cited sources",
            con: "Retrieval quality bottleneck",
          },
          {
            name: "RLHF (Reinforcement Learning from Human Feedback)",
            desc: "Train reward model on human preferences → use RL (PPO) to optimize LLM toward human-preferred outputs.",
            example: "ChatGPT training: humans rank responses → reward model → PPO fine-tuning",
            pro: "Aligns model with human values and preferences",
            con: "Expensive human labeling, reward hacking",
          },
          {
            name: "LLM Agents",
            desc: "LLM + tools (search, calculator, code executor) + memory + planning (ReAct, Chain-of-Thought).",
            example: "AutoGPT: goal → plan → execute → reflect → iterate",
            pro: "Can solve complex multi-step real-world tasks",
            con: "Reliability, cost, latency challenges",
          },
        ],
      },
      {
        type: "interview",
        title: "🎯 Interview Answer: RAG",
        body: `"RAG (Retrieval Augmented Generation) combines a retriever and a generator. When a query arrives, we first retrieve top-k relevant document chunks from a vector database (using embedding similarity search with FAISS or Pinecone). These chunks are prepended to the LLM prompt as context. The LLM then generates a response grounded in retrieved facts — dramatically reducing hallucinations and enabling up-to-date responses without retraining. The vector DB stores document embeddings from an offline indexing pipeline using models like text-embedding-ada-002 or sentence-transformers."`,
      },
    ],
  },
  {
    id: "interview-guide",
    emoji: "🎯",
    title: "Complete Interview Cheat Sheet",
    color: "#06b6d4",
    content: [
      {
        type: "concept",
        title: "How to Structure Any NLP Interview Answer",
        body: `The IDEA Framework:
I — Introduction: Define the concept in 1-2 sentences
D — Deep Dive: Explain the mechanism (math/architecture if needed)
E — Example: Give a concrete real-world example
A — Application/Trade-off: When to use it, what are its limits

Always end with: "In production, I would…" — shows practical mindset.`,
      },
      {
        type: "example",
        title: "Top Interview Questions & One-Line Answers",
        items: [
          "Q: What is attention? → A: Learned weighted sum of values, where weights depend on query-key compatibility across all positions simultaneously.",
          "Q: BERT vs GPT? → A: BERT=bidirectional encoder for understanding; GPT=causal decoder for generation.",
          "Q: Why transformers over LSTM? → A: Parallelizable training, handles long-range dependencies, scales better.",
          "Q: What is vanishing gradient? → A: Gradients shrink exponentially in deep/long networks → early layers don't learn. LSTMs use gates; Transformers use residual connections.",
          "Q: Explain TF-IDF → A: TF rewards frequent words per doc; IDF penalizes words common across all docs → highlights unique important words.",
          "Q: What is perplexity? → A: Measure of how well LM predicts a sample. Lower = better. exp(cross-entropy loss).",
          "Q: Fine-tune vs prompt engineering? → A: Fine-tune changes model weights for task; prompting guides frozen model with context — prompting is cheaper, fine-tuning is more precise.",
          "Q: What is hallucination? → A: LLM generates plausible but factually incorrect content. Mitigated by RAG, RLHF, grounding.",
        ],
      },
    ],
  },
  {
    id: "curriculum",
    emoji: "📚",
    title: "Complete NLP Learning Curriculum",
    color: "#84cc16",
    content: [
      {
        type: "pipeline",
        steps: [
          {
            step: "Phase 1: Foundations (Weeks 1-3)",
            example: "Python, NumPy, Pandas, Matplotlib, basic ML (sklearn)",
            why: "Linear regression, classification, overfitting, cross-validation",
          },
          {
            step: "Phase 2: Classical NLP (Weeks 4-6)",
            example: "NLTK, spaCy — tokenization, POS tagging, NER, BOW, TF-IDF",
            why: "Text classification with Naive Bayes, SVM. Regex, text cleaning",
          },
          {
            step: "Phase 3: Word Embeddings (Weeks 7-8)",
            example: "Word2Vec (gensim), GloVe, FastText",
            why: "Semantic similarity, analogy tasks, visualization (t-SNE)",
          },
          {
            step: "Phase 4: Deep Learning NLP (Weeks 9-11)",
            example: "PyTorch — RNN, LSTM, GRU from scratch",
            why: "Sentiment analysis, text generation, seq2seq translation",
          },
          {
            step: "Phase 5: Transformers (Weeks 12-15)",
            example: "HuggingFace Transformers — BERT, GPT-2, T5",
            why: "Fine-tune BERT for classification, QA, NER. Build summarizer with T5",
          },
          {
            step: "Phase 6: LLMs & Production (Weeks 16-20)",
            example: "OpenAI API, LangChain, LlamaIndex, FAISS, Pinecone",
            why: "Build RAG pipeline, chatbot, agent. Deploy with FastAPI + Docker",
          },
          {
            step: "Phase 7: Advanced Topics (Ongoing)",
            example: "LoRA fine-tuning, RLHF, multimodal (CLIP, Flamingo), evals",
            why: "Read papers: Attention Is All You Need, BERT, GPT-3, InstructGPT",
          },
        ],
      },
      {
        type: "example",
        title: "Essential Resources",
        items: [
          "📖 Book: Speech and Language Processing — Jurafsky & Martin (free online)",
          "📖 Book: Natural Language Processing with Transformers — HuggingFace",
          "🎓 Course: fast.ai NLP, Stanford CS224N (YouTube)",
          "🎓 Course: DeepLearning.AI NLP Specialization (Coursera)",
          "💻 Practice: Kaggle NLP competitions",
          "📄 Papers: attention_is_all_you_need, BERT, GPT-3, InstructGPT, LoRA",
          "🛠️ Tools: HuggingFace, LangChain, spaCy, NLTK, Gensim, PyTorch",
        ],
      },
    ],
  },
];

const TypeBadge = ({ type }) => {
  const colors = {
    concept: "#3b82f6",
    analogy: "#f59e0b",
    example: "#10b981",
    interview: "#8b5cf6",
    timeline: "#ef4444",
    pipeline: "#6366f1",
    comparison: "#14b8a6",
  };
  return (
    <span
      style={{
        background: colors[type] || "#6b7280",
        color: "#fff",
        fontSize: "0.65rem",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "12px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {type}
    </span>
  );
};

const ContentBlock = ({ block }) => {
  if (block.type === "timeline") {
    return (
      <div style={{ marginTop: 12 }}>
        {block.items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 14,
              marginBottom: 14,
              alignItems: "flex-start",
            }}
          >
            <div style={{ minWidth: 90, textAlign: "right" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#9ca3af",
                  fontFamily: "monospace",
                }}
              >
                {item.era}
              </span>
            </div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ff6b35",
                marginTop: 3,
                flexShrink: 0,
                boxShadow: "0 0 8px #ff6b35",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 3,
                }}
              >
                <span style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "0.9rem" }}>
                  {item.label}
                </span>
                <span
                  style={{
                    background: item.tag === "⚡ Breakthrough" ? "#fbbf24" : "#1e293b",
                    color: item.tag === "⚡ Breakthrough" ? "#000" : "#94a3b8",
                    fontSize: "0.65rem",
                    padding: "1px 7px",
                    borderRadius: 10,
                    fontWeight: 700,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.83rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "pipeline") {
    return (
      <div style={{ marginTop: 12 }}>
        {block.steps.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 10,
            }}
          >
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 4, fontSize: "0.88rem" }}>
              {s.step}
            </div>
            <div
              style={{
                fontFamily: "monospace",
                color: "#34d399",
                fontSize: "0.8rem",
                marginBottom: 4,
              }}
            >
              {s.example}
            </div>
            <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{s.why}</div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "comparison") {
    return (
      <div style={{ marginTop: 12 }}>
        {block.items.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 10,
            }}
          >
            <div style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 6, fontSize: "0.88rem" }}>
              {item.name}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "0.82rem", marginBottom: 6 }}>{item.desc}</div>
            <div
              style={{
                fontFamily: "monospace",
                background: "#1e293b",
                padding: "6px 10px",
                borderRadius: 6,
                color: "#7dd3fc",
                fontSize: "0.78rem",
                marginBottom: 6,
              }}
            >
              {item.example}
            </div>
            <div style={{ display: "flex", gap: 10, fontSize: "0.75rem" }}>
              <span style={{ color: "#34d399" }}>✅ {item.pro}</span>
              <span style={{ color: "#f87171" }}>⚠️ {item.con}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "example") {
    return (
      <div style={{ marginTop: 12 }}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                color: "#94a3b8",
                fontSize: "0.84rem",
                marginBottom: 7,
                lineHeight: 1.6,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "interview") {
    return (
      <div
        style={{
          marginTop: 12,
          background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)",
          border: "1px solid #4f46e5",
          borderLeft: "4px solid #8b5cf6",
          borderRadius: 10,
          padding: "14px 16px",
        }}
      >
        <div
          style={{
            color: "#a5b4fc",
            fontSize: "0.83rem",
            lineHeight: 1.75,
            fontStyle: "italic",
            whiteSpace: "pre-line",
          }}
        >
          {block.body}
        </div>
      </div>
    );
  }

  if (block.type === "analogy") {
    return (
      <div
        style={{
          marginTop: 12,
          background: "linear-gradient(135deg, #1c1a12 0%, #0f172a 100%)",
          border: "1px solid #d97706",
          borderLeft: "4px solid #f59e0b",
          borderRadius: 10,
          padding: "14px 16px",
        }}
      >
        <div
          style={{
            color: "#fde68a",
            fontSize: "0.83rem",
            lineHeight: 1.75,
            whiteSpace: "pre-line",
          }}
        >
          {block.body}
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 12 }}>
      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.84rem",
          lineHeight: 1.75,
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        {block.body}
      </p>
    </div>
  );
};

const Section = ({ section, isOpen, onToggle }) => {
  return (
    <div
      style={{
        marginBottom: 16,
        borderRadius: 14,
        border: `1px solid ${isOpen ? section.color + "44" : "#1e293b"}`,
        background: "#0f172a",
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "16px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 14,
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: "1.4rem" }}>{section.emoji}</span>
        <span
          style={{
            fontWeight: 700,
            color: isOpen ? section.color : "#e2e8f0",
            fontSize: "1rem",
            flex: 1,
            fontFamily: "'Georgia', serif",
            transition: "color 0.2s",
          }}
        >
          {section.title}
        </span>
        <span
          style={{
            color: section.color,
            fontSize: "1.1rem",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div style={{ padding: "4px 20px 20px" }}>
          {section.content.map((block, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <TypeBadge type={block.type} />
                {block.title && (
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {block.title}
                  </span>
                )}
              </div>
              <ContentBlock block={block} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function NLPNotes() {
  const [openSections, setOpenSections] = useState({ "why-nlp": true });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all = {};
    sections.forEach((s) => (all[s.id] = true));
    setOpenSections(all);
  };

  const collapseAll = () => setOpenSections({});

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e2e8f0",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "0 0 60px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          borderBottom: "1px solid #1e293b",
          padding: "32px 24px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#6366f1", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
          Senior AI Engineer Interview Prep
        </div>
        <h1
          style={{
            margin: "0 0 10px",
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            fontFamily: "'Georgia', serif",
            fontWeight: 900,
            background: "linear-gradient(90deg, #00d4ff, #8b5cf6, #ff6b35)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Complete NLP Mastery Notes
        </h1>
        <p style={{ color: "#64748b", fontSize: "0.88rem", margin: "0 0 20px" }}>
          From Rule-Based Systems → Word Embeddings → Transformers → LLMs
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {["Why NLP", "Evolution", "Preprocessing", "Embeddings", "Attention", "BERT/GPT", "RAG/RLHF", "Curriculum"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "#1e293b",
                color: "#94a3b8",
                padding: "3px 12px",
                borderRadius: 20,
                fontSize: "0.72rem",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: "14px 24px",
          background: "#0a0f1e",
          borderBottom: "1px solid #1e293b",
          overflowX: "auto",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Concept", color: "#3b82f6" },
          { label: "Analogy 📦", color: "#f59e0b" },
          { label: "Example", color: "#10b981" },
          { label: "Interview 🎯", color: "#8b5cf6" },
          { label: "Timeline", color: "#ef4444" },
          { label: "Comparison", color: "#14b8a6" },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color }} />
            <span style={{ color: "#64748b", fontSize: "0.72rem" }}>{l.label}</span>
          </div>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            onClick={expandAll}
            style={{
              background: "#1e293b",
              border: "none",
              color: "#94a3b8",
              padding: "3px 12px",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: "0.72rem",
            }}
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            style={{
              background: "#1e293b",
              border: "none",
              color: "#94a3b8",
              padding: "3px 12px",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: "0.72rem",
            }}
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px 0" }}>
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            isOpen={!!openSections[section.id]}
            onToggle={() => toggleSection(section.id)}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 40, color: "#334155", fontSize: "0.75rem" }}>
        NLP Mastery Notes · Basic → Advanced · Interview Ready
      </div>
    </div>
  );
}