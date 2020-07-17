// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderOpenOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FolderOpenOutlined';

export default {
  name: 'IconFolderOpenOutlined',
  displayName: 'FolderOpenOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderOpenOutlinedSvg } },
      children,
    ),
};