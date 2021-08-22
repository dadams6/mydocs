import React from "react";

const OutputData = ({ docs }) => {

  function folderToggle(e) {
    e.preventDefault();
    e.target.classList.toggle('folderOpen');
    e.target.closest('tr').classList.toggle('folderOpenRow');
    e.target.nextSibling.querySelector('table').classList.toggle('showFolderContents');
  }

  return (
    <>
      {!docs.length ? (
        <tr>
          <td colSpan="3"><p>No documents have been uploaded yet</p></td>
        </tr>
      ) : (
        docs.map((doc, i) => {
          i++
          return (
            <tr key={i}>
              {doc.type === 'folder' ? (
                <>
                  <td onClick={folderToggle} className={`type type--${doc.type}`}><span className="visually-hidden">{doc.type}</span></td>
                  <td className="name">
                    {doc.name} <small>({doc.files.length})</small>
                    <table>
                      <tbody>
                        {doc.files.map((file, i) => {
                          return (
                            <tr key={i}>
                              <td className={`type type--${file.type}`}><span className="visually-hidden">{file.type}</span></td>
                              <td className="name">{file.name}</td>
                              <td className="added">{file.added}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </td>
                  <td className="added">{doc.added}</td>
                </>
              ) : (
                <>
                  <td className={`type type--${doc.type}`}><span className="visually-hidden">{doc.type}</span></td>
                  <td className="name">{doc.name}</td>
                  <td className="added">{doc.added}</td>
                </>
              )}
            </tr>
          );
        })
      )}
    </>
  );
};

export default OutputData;