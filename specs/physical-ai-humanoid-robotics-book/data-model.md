# data-model.md — Physical AI & Humanoid Robotics Book

## Entities

1. User
   - id: UUID (primary)
   - email: string
   - display_name: string
   - created_at: timestamp

2. UserProfile
   - id: UUID (primary)
   - user_id: UUID (FK -> auth.users)
   - software_background: enum (Beginner|Intermediate|Advanced)
   - ai_experience: enum
   - robotics_experience: enum
   - hardware_access: enum
   - use_case: text
   - learning_pace: enum
   - ros_experience: boolean
   - deployment_env: enum
   - preferences: jsonb (personalization settings)
   - created_at, updated_at

3. Chapter / Section (BookContent)
   - id: text (chapter_id/section_id)
   - title: text
   - chapter_number: int
   - section_slug: text
   - content_markdown: text
   - summary: text
   - difficulty: enum
   - created_at, updated_at

4. Translation
   - id: UUID
   - chapter_id: text
   - section_id: text
   - source_lang: varchar
   - target_lang: varchar
   - source_text: text
   - translated_text: text
   - created_at

5. ChatConversation
   - id: UUID
   - user_id: UUID (nullable for anonymous)
   - started_at: timestamp
   - metadata: jsonb

6. ChatMessage
   - id: UUID
   - conversation_id: UUID
   - sender: enum(user|assistant|system)
   - text: text
   - created_at: timestamp

7. VectorMetadata (stored in Qdrant)
   - payload: { chapter, section, url, tokens, chunk_index }
   - embedding_id: qdrant internal id

## Relationships
- User 1 -> 1 UserProfile
- Chapter contains many Sections
- ChatConversation 1 -> N ChatMessage
- BookContent entries are the source for vector embeddings

## Validation Rules
- Emails validated by regex on signup
- Translations: source_lang/target_lang must be ISO codes
- Chunks: max 500 tokens per embedding chunk
