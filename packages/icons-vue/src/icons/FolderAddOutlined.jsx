// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FolderAddOutlined';

export default {
  name: 'IconFolderAddOutlined',
  displayName: 'FolderAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderAddOutlinedSvg } },
      children,
    ),
};