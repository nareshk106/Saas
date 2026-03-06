import userCrude from "../models/taskModels.js";

// ✅ GET all content
export const GetContent = async (req, res) => {
  try {
    const allContent = await userCrude.find();

    if (!allContent || allContent.length === 0) {
      return res.status(404).json({ message: "No content found" });
    }

    res.status(200).json({
      message: "Fetched successfully",
      data: allContent,
    });
  } catch (error) {
    console.error("❌ Error fetching content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ POST new content
export const PostContent = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newContent = new userCrude({ title, content });
    const savedContent = await newContent.save();

    res.status(201).json({
      message: "Content added successfully",
      data: savedContent,
    });
  } catch (error) {
    console.error("❌ Error adding content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ UPDATE content by ID (uses URL param)
export const UpdateContent = async (req, res) => {
  try {
    const { id } = req.params; // <-- from URL now
    const { title, content } = req.body;

    const updatedContent = await userCrude.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // return the updated document
    );

    if (!updatedContent) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.status(200).json({
      message: "Content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    console.error("❌ Error updating content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ DELETE content by ID
export const DeleteContent = async (req, res) => {
  try {
    const { id } = req.params; // <-- from URL

    const deletedContent = await userCrude.findByIdAndDelete(id);

    if (!deletedContent) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting content:", error);
    res.status(500).json({ message: "Server error" });
  }
};


