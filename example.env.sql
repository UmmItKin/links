DROP TRIGGER IF EXISTS trg_enforce_view_count_increment ON page_views;
DROP FUNCTION IF EXISTS enforce_view_count_increment();

CREATE OR REPLACE FUNCTION increment_page_view_rpc(page_path_param TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_view_count INTEGER;
BEGIN
  UPDATE page_views
  SET view_count = view_count + 1
  WHERE page_path = page_path_param
  RETURNING view_count INTO new_view_count;

  IF NOT FOUND THEN
    INSERT INTO page_views (page_path, view_count)
    VALUES (page_path_param, 1)
    RETURNING view_count INTO new_view_count;
  END IF;

  RETURN new_view_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP POLICY IF EXISTS "Allow public insert to page_views" ON page_views;
DROP POLICY IF EXISTS "Allow updates to page_views (logic in trigger)" ON page_views;
DROP POLICY IF EXISTS "Allow only incrementing views" ON page_views;
DROP POLICY IF EXISTS "Allow controlled view count update" ON page_views;
DROP POLICY IF EXISTS "Allow public update to page_views" ON page_views;
DROP POLICY IF EXISTS "Allow public insert/update to page_views" ON page_views;

DROP POLICY IF EXISTS "Allow public read access to page_views" ON page_views;
CREATE POLICY "Allow public read access to page_views"
  ON page_views FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to page_views (if needed)"
  ON page_views FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to page_views (if needed)"
  ON page_views FOR UPDATE
  USING (false);

-- Enable Row Level Security
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_likes ENABLE ROW LEVEL SECURITY;

SELECT proname AS function_name, prokind, prosrc
FROM pg_proc
WHERE proname = 'increment_page_view_rpc';

SELECT policyname, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'page_views';